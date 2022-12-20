'use strict';

const { options } = require('../../routes')

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Spots';

    await queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '123 test dr.',
        city: 'testCity',
        state: 'testState',
        country: 'United States',
        lat: 90.0000000,
        lng: 180.0000000,
        name: 'a Beaut',
        description: 'A beautiul place nothing like it!',
        price: 50.99
      },
      {
        ownerId: 2,
        address: '222 test ave.',
        city: 'Detroit',
        state: 'Michigan',
        country: 'United States',
        lat: 42.3314000,
        lng: 83.0458000,
        name: 'detroit living',
        description: `It's detroit`,
        price: 40.99,
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      name: {
        [Op.in]: ['a Beaut', 'detroit living']
      }
    }, {});
  }
};
