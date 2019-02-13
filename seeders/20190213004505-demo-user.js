'use strict';

var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    var newData = [];

      for (let i = 0; i < 1000; i++) {
        const seedData = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            created_at: new Date(),
            updated_at: new Date()
        };
        newData.push(seedData);
      }

    return queryInterface.bulkInsert('Users', newData);

    /*
    return queryInterface.bulkInsert('Users', [{
      name: 'Ricardo Domingues',
      email: 'ricardo@mail.com',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
