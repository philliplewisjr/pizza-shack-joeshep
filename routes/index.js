'use strict';

const { Router } = require("express");
const router = Router()

//public routes
router.use(require('./about'))
router.use(require('./contact'))
router.use(require('./login'))
// router.use(require('./register'))
// router.use(require('./root'))
// router.use(require('./404'))

//login faurd middleware. Send them back home if not registered
// router.use((req, res, next)=> {
//   //TODO: will have to define isAuthenticated
//   if(req.isAuthenticated()) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// })


//routes accessible if you are logged in
// router.use(require('./logout'))
router.use(require('./order'))
module.exports = router;
