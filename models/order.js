'use strict';

const {bookshelf } = require("../db/database")

const Orders = bookshelf.Model.extend({
  tablename: "orders"
});

module.exports = Orders;
