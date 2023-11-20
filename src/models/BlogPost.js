const blogPost = (sequelize, DataTypes ) => {
  const post = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });

  post.associate = (models) => {
    post.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return post;
};

module.exports = blogPost;