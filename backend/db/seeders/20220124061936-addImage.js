'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
     {
       userId: 1,
       albumId: 1,
       imageUrl: 'https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-04-1024x683.jpg',
       content: 'River ',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       albumId: 1,
       imageUrl: 'https://www.localguidesconnect.com/t5/image/serverpage/image-id/696723i1EFC70E91AE19D83/image-size/large?v=v2&px=999',
       content: 'River',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 1,
       albumId: 1,
       imageUrl: 'https://images.unsplash.com/photo-1599074914978-2946b69e5a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&w=1000&q=80',
       content: 'Haor',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 2,
       imageUrl: 'https://res.cloudinary.com/depdd11lz/image/upload/v1636565772/Drivr-snow-subie_d3pu22.jpg',
       content: 'Moody Subie',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userId: 3,
       imageUrl: '',
       content: 'Village',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: 'https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg',
      content: 'Tajmahal',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      albumId: 2,
      imageUrl: 'https://theculturetrip.com/wp-content/uploads/2015/06/shutterstock_725535832.jpg',
      content: 'Golden Temple',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      albumId: 2,
      imageUrl: 'https://img.theculturetrip.com/wp-content/uploads/2015/06/shutterstock_404519536.jpg',
      content: 'Kashmir',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      userId: 1,
      albumId: 2,
      imageUrl: 'https://www.worldatlas.com/r/w1200/upload/bb/94/bb/shutterstock-634408664.jpg',
      content: 'Root Bridge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      imageUrl: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20181001193434/Beautiful-landscape-in-Norther-part-of-India-Stakna-Monastery-Ladakh.jpg',
      content: 'Nature',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      imageUrl: 'https://www.worldatlas.com/r/w1200/upload/c7/ea/2d/shutterstock-488046502.jpg',
      content: 'Ladakh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      imageUrl: 'https://image.scoopwhoop.com/q30/s4.scoopwhoop.com/wp-content/uploads/2014/03/leh.jpg',
      content: 'Shimla',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
