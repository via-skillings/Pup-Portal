'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Dog",
      [
        {
            "name": "Mac",
            "age": "5",
            "breed": "cattle dog mix",
            "size": "large",
            "weight": "65",
            "sex": "male",
            "vaccinated": "yes",
            "spayed": "yes",
            "fee": "30"
          },
          {
            "name": "Carly",
            "age": "8",
            "breed": "golden retriever",
            "size": "large",
            "weight": "80",
            "sex": "golden retriever",
            "vaccinated": "yes",
            "spayed": "yes",
            "fee": "50"
          },
          {
            "name": "Balto",
            "age": "2",
            "breed": "husky",
            "size": "large",
            "weight": "75",
            "sex": "male",
            "vaccinated": "yes",
            "spayed": "yes",
            "fee": "70"
          },
          
          {
            "name": "Rick",
            "age": "1",
            "breed": "scottie",
            "size": "medium",
            "weight": "30",
            "sex": "male",
            "vaccinated": "yes",
            "spayed": "yes",
            "fee": "70"
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
    await queryInterface.bulkDelete("Dog",null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
