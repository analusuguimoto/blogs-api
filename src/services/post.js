const { BlogPost, PostCategory, User, Category } = require('../models');
const categoryVerify = require('./category');

const newPost = async (title, content, categoryIds, userId) => {
  const noCategories = await categoryVerify.categoryGetById(categoryIds);
  // console.log('no cat da service', noCategories);

  if (noCategories) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
  
  const post = await BlogPost.create({
    title,
    content,
    userId,
    published: Date.now(),
    updated: Date.now(),
  });

  const postCategory = categoryIds.map((categoryId) => ({
    postId: post.id,
    categoryId,
  }));

  await PostCategory.bulkCreate(postCategory);

  return { status: 'CREATED', data: post };
};

const getPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESS', data: allPosts };
};

const postById = async (id) => {
  const findPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!findPost) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }

  return { status: 'SUCCESS', data: findPost };
};

const updatePost = async (title, content, id, userId) => {
  if (+userId !== +id) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  await BlogPost.update({ title, content }, { where: { id } });

  const response = await BlogPost.findByPk(id, {
    include: 
        { model: Category,
          as: 'categories', 
          through: { attributes: [] }, 
        },
  });

  return { status: 'SUCCESS', data: response };
};

module.exports = {
  newPost,
  getPosts,
  postById,
  updatePost,
};