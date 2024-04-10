'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user",
    [
      {
          "name": "Victoria",
          "email": "victoria@gmail.com",
          "password": "password12345"
        },
        {
          "name": "Cassie",
          "email": "cassie@gmail.com",
          "password": "password678910"
        },
        {
          "name": "Carolina",
          "email": "carolina@gmail.com",
          "password": "mypassword01234"
        },
        {
          "name": "Olivia",
          "email": "olivia@gmail.com",
          "password": "mypassword56789"
        },
        {
          "name": "Sadie",
          "email": "sadie@gmail.com",
          "password": "12345password"
        }
    ]
  )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user",null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
