'use strict';

const User = require('../models').User;

var faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

      const userIds = await User.findAll({attributes: ['id', 'name'], raw: true});
      console.log(userIds.length)

      return Promise.all(userIds.map(async (user_id) => {
        var peopleCollection = [];
        peopleCollection.push({
          user_id: user_id.id,
          address: faker.address.city(),
          created_at: new Date(),
          updated_at: new Date()
        })
        return queryInterface.bulkInsert('People', peopleCollection, {});
      }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
