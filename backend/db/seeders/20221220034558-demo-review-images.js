'use strict';

const { query } = require('express');
const { options } = require('../../routes');

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.schema;
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
    options.tableName = 'ReviewImages'
    await queryInterface.bulkInsert('ReviewImages', [
      {
        reviewId: 1,
        url: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg'
      },
      {
        reviewId: 2,
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'ReviewImages';
    await queryInterface.bulkDelete('ReviewImages');
  }
};
