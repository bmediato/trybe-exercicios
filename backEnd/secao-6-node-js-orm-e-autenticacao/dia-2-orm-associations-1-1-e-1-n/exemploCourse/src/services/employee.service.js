// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' }, //ass tem que ser igual ao nome la da relaçao que fica no model
  });

  return users;
};

module.exports = { getAll };