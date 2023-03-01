// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' }, //ass tem que ser igual ao nome la da relaçao que fica no model
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const employee = await Employee.create({ firstName, lastName, age });

  await Address.create({ city, street, number, employeeId: employee.id });
  return employee;
};

module.exports = { 
  getAll,
  getById,
  insert,
};