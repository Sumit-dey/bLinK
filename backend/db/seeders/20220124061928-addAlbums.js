'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Albums', [
     {
       userId: 1,
       title: 'Bangladesh',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       title: 'India',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
