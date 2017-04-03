'use strict';

const { Router } = require("express")
//requires in the module/middleware for access to the route
const { show } = require("../controllers/contactCtrl")
//creates the routehandler
const router = Router();
//creates a route and uses the middleware to access the route
router.get("/contact", show);
//exports the route for use
module.exports = router
