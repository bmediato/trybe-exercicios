"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//index.ts
var client_1 = require("./client");
var order_1 = require("./order");
var orderItem_1 = require("./orderItem");
var client = new client_1.default('João');
var sandwich = new orderItem_1.default('Sanduíche Natural', 5.00);
var juice = new orderItem_1.default('Suco de Abacaxi', 5.00);
var dessert = new orderItem_1.default('Gelatina de Uva', 2.50);
var order = new order_1.default(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
console.log(order);
