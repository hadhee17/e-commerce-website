const express = require("express");
const authController = require("../controller/authController");
const route = express.Router();

route.post("/signup", authController.signup);
route.post("/login", authController.login);
route.post("/check-user", authController.checkAuth);
route.get("/profile", authController.checkAuth, authController.profile);
route.get("/logout", authController.logout);

module.exports = route;
