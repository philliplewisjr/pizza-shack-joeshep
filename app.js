'use strict';

require("dotenv").config

const express  = require("express");
const app = express();
const routes = require("./routes/");
const expressValidator = require("express-validator");
const expressSession = require("express-sessions");



//pug configuration for the view engine
app.set("view engine", "pug");

app.locals.company = " Pizza Shack 🍕";
app.locals.body = {};
app.locals.body.magic = " Fooooo! ";

//tells express to look in this directory
app.use(express.static("public"))
//access to all the routes and middlewares
app.use(routes);



// app.get("/about", (req, res, next)=> {
//   res.render("about", {page: "About"})
// })

// app.get("/contact", (req, res, next)=> {
//   res.render("contact", {page: "Contact"});
// })

// app.get("/login", (req, res, next)=> {
//   res.render("login", {page: "Login"})
// })

app.get("/register", (req, res, next)=> {
  res.render("register", {page: "Register"})
})

//default error
app.use((req, res)=>{
  res.render("404");
})



const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log("Listening on port ${port}");
});
