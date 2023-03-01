// src/migrations/[timestamp]-create-addresses.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE', //faça a deleção em cascata, irá deletar todos os campos que tem essa relação
        onDelete: 'CASCADE',
        field: 'employee_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'employees', //tem que chamar exatamente como a outra migration chama ou nome que esta dentro do banco
          // Informa a coluna da referência que é a chave correspondente
          key: 'id', //chave referenciada da outra tabela
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('addresses');
  },
};
