const { Router } = require("express")
//requires in the module/middleware for access to the route
const { show, create } = require("../controllers/orderCtrl")

//creates the routehandler
const router = Router();
//creates the route and uses the middleware to access the route
router.get("/order", show)
router.post("/order", create)
//exports the router for use
module.exports = router
