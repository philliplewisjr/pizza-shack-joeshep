'use strict';

const { bookshelf } = require("../db/database");

const Orders = bookshelf.Model.extend({
  tableName: "orders"
});

module.exports = Orders;
