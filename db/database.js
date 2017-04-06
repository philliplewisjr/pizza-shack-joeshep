const env = process.env.NODE_ENV || "development";
const config = require("../knexfile.js")
const knex = require("knex")(config[env]);
const bookshelf = require("bookshelf")(knex);

bookshelf.plugin(require("bookshelf-bcrypt"));

module.exports = {bookshelf};
