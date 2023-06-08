'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Posts", "CategoryId", {
      type: Sequelize.INTEGER,
      references:{
        model: "Categories",
        key: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Posts","CategoryId")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
