"use strict";

const { Router } = require("express");
//requires in the moduel that controls the view
const { show } = require("./homeCtrl");
//creates the route handler
const router = Router();
//creates the route and the uses the middleware to access the route
router.get("/index", show);
//exports the router for use
module.exports = router
