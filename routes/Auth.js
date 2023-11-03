const express = require("express");
const router = express.Router();
const Validate = require("../middlewares/Validate");
const validation = require("../validators/AuthValidator");
const AuthController = require("../controllers/AuthController");

router.post("/", Validate(validation.LoginValidator), AuthController.handleLogin);

module.exports = router;
