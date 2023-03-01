// src/models/address.model.js

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'addresses',
    underscored: true,
  });

  Address.associate = (models) => {
  // define o tipo de relacionamento
    Address.belongsTo(models.Employee, //belongs to epara quando tem uma chave estrangeira na tabela
    // define qual a foreign key a ser criada
      { foreignKey: 'employeeId', //mesmo nome do de cima
       as: 'employees' // dar nome ao relacionamento que essas tabelas tem 
      });
  };

  return Address;
};