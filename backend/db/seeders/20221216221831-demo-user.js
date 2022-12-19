'use strict';
const bcrypt = require('bcryptjs');

const { options } = require('../../routes');

if(process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   options.tableName = 'Users';

   await queryInterface.bulkInsert(options, [
    {
      email: 'test@user.io',
      username: 'test1',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'test2@user.io',
      username: 'test2',
      hashedPassword: bcrypt.hashSync('password2')
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      username: {
        [Op.in]: ['test-user', 'bozo123']
      }
    }, {});
  }
};
