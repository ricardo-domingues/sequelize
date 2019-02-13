'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    // createdAt: DataTypes.DATE,
    // updatedAt: DataTypes.DATE
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Person, {
      foreignKey: 'user_id'
    });
  };
  return User;
};