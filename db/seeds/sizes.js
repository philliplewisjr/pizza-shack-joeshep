'use strict';
const sizes = require("./sizes.json")


exports.seed = function(knex, Promise) {
  const sizePromises = sizes.map(({name, inches})=> {
    return knex("sizes").insert({size_name: name, size_inches: inches})
  })
  // Deletes ALL existing entries
  return knex("sizes").del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(sizePromises)
    });
};
