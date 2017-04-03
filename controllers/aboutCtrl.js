"use strict";

//controller is where you tell your app to do something
module.exports.show = (req, res) => {
  res.render("about", {page: "About"})
};
