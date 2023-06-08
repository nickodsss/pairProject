'use strict';

const fs = require ('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./dataCategories/Categories.json", "utf-8"))
    // console.log(data);
    data.forEach(el=>{
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert("Categories", data)
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

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};