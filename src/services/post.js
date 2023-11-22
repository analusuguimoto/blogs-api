const { BlogPost, PostCategory } = require('../models');
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

module.exports = {
  newPost,
};