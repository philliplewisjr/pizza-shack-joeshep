'use strict';

const toppings = require("./toppings.json");

exports.seed = function(knex, Promise) {
  let toppingsPromises = toppings.map(({name})=>{
    return knex("toppings").insert({topping_name: name})
  })

  return knex("toppings").del()
  .then(function () {
    return Promise.all(toppingsPromises)
  });
};
