'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    address: DataTypes.STRING
  }, {
  	timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  Person.associate = function(models) {
    Person.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return Person;
};