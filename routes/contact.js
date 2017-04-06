'use strict';

const { Router } = require("express")
//requires in the module/middleware for access to the route
const { show, addContact } = require("../controllers/contactCtrl")
//creates the routehandler
const router = Router();
//creates a route and uses the middleware to access the route
router.get("/contact", show);
// router.post("/contact", addContact);
//exports the route for use
module.exports = router
