const category = (sequelize, DataTypes) => {
  const eachCategory = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  });

  return eachCategory;
}

module.exports = category;
