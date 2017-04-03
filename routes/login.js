"use strict";

const { Router } = require("express")
//requires in the show module/middleware that controls the view
const { show } = require("../controllers/loginCtrl")
//creates the route handler
const router = Router()
//creates the route and uses the middleware for the route
router.get("/login", show);
//exports the router to be used by index.js
module.exports = router
