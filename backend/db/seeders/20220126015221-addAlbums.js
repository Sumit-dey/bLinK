
'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Albums';
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(options, [
     {
       userId: 1,
       title: 'Nature',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       title: 'Food and Drink',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      userId: 1,
      title: 'Blinking',
      createdAt: new Date(),
      updatedAt: new Date()
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Albums';
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete(options, null, {});
  }
};
