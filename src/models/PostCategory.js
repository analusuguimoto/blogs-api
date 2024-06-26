const postCategory = (sequelize, DataTypes) => {
  const postcat = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
  })

  postcat.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: postcat,
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: postcat,
    })
  };
  return postcat;
};

module.exports = postCategory;