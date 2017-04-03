"use strict";

const { Router } = require("express")
//requires in the module/middleware for access to the route
const { show } = require("../controllers/aboutCtrl")
//creates the routehandler
const router = Router();
//creates the route and uses the middleware to access the route
router.get("/about", show)
//exports the router for use
module.exports = router
