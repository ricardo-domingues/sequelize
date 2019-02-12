'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    address: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    Profile.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return Profile;
};