'use strict';

const { options } = require('../../routes');

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

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
    options.tableName = 'Bookings'
    await queryInterface.bulkInsert('Bookings', [
      {
        startDate: '2023-05-25',
        endDate: '2023-05-30',
        userId: 1,
        spotId: 1,
      },
      {
        startDate: '2023-03-03',
        endDate: '2023-03-03',
        userId: 2,
        spotId: 2
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Bookings';
    await queryInterface.bulkDelete('Bookings');
  }
};
