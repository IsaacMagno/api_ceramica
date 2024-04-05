module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Address", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      street: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      houseNumber: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING(255),
      },
      neighborhood: {
        type: Sequelize.STRING(100),
      },
      city: {
        type: Sequelize.STRING(100),
      },
      state: {
        type: Sequelize.STRING(100),
      },
      cep: {
        type: Sequelize.STRING(10),
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Address");
  },
};
