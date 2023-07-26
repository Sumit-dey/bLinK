'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Images';
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(options, [
     {
       userId: 1,
       albumId: 1,
       imageUrl: 'https://images.unsplash.com/photo-1610290110429-849a16309013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
       content: 'Olympic Park',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       albumId: 1,
       imageUrl: 'https://images.unsplash.com/photo-1637152630314-9e73782b9cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
       content: 'Bird',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       albumId: 1,
       imageUrl: 'https://images.unsplash.com/photo-1601592778918-ff6bbb43f02c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
       content: 'Iran',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 2,
       imageUrl: 'https://images.unsplash.com/photo-1642514115512-477b0df16747?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
       content: 'Moody',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 3,
       imageUrl: 'https://images.unsplash.com/photo-1581094378626-7b436b695232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
       content: 'Male structural engineer in earthquake ruins',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: 'https://images.unsplash.com/photo-1642670719873-e1158da4c462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      content: 'Lunch in Japan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      albumId: 2,
      imageUrl: 'https://images.unsplash.com/photo-1628468525539-b1734c3e3079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      content: 'Coffie',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      albumId: 2,
      imageUrl: 'https://images.unsplash.com/photo-1642718543152-db31a7a5d929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      content: 'Fruits',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      imageUrl: 'https://images.unsplash.com/photo-1642708220085-188e8f87a780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      content: 'Golden hour at the Golden Gate Bridge.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      imageUrl: 'https://images.unsplash.com/photo-1642509065947-5569edd10854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      content: 'Hill side ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      albumId: 2,
      imageUrl: 'https://images.unsplash.com/photo-1642231877874-ce3e205f39c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      content: 'Duck',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      albumId: 3,
      imageUrl: 'https://images.unsplash.com/photo-1473655762411-be043ade8591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      content: 'First Valentine’s Day',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      albumId: 3,
      imageUrl: 'https://images.unsplash.com/photo-1638513848528-fe762cee75b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80',
      content: 'Blinking mewwwwww',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      albumId: 3,
      imageUrl: 'https://images.unsplash.com/photo-1626544379337-8a2f70ed63b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80',
      content: 'Blinking',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Alnums';
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete(options, null, {});
  }
};
