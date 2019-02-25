'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPermissions = sequelize.define('UserPermissions', {
    user_id: DataTypes.INTEGER,
    entity_id: DataTypes.INTEGER,
    info_type: DataTypes.REAL,
    access_type: DataTypes.REAL
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  UserPermissions.associate = function(models) {
    // associations can be defined here
    UserPermissions.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
  return User;
};