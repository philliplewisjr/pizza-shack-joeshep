
"use strict";

const { Router } = require("express")
//requires in the module/middleware for access to the route
const { show } = require("../controllers/homeCtrl")
//creates the routehandler
const router = Router();
//creates a route and uses the middleware for access to route
router.get("/", show);

module.exports = router;
