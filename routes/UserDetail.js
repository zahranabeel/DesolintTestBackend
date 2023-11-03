const express = require("express");
const router = express.Router();
const Validate = require("../middlewares/Validate");
const validation = require("../validators/UserDetailValidator");
const imageUploader = require("../middlewares/multer");
const UserDetailController = require("../controllers/UserDetailController");

router.post("/", imageUploader.array("images"), Validate(validation.CreateUserDetailValidator), UserDetailController.createUserDetail);

router.get("/", UserDetailController.getAllUserDetail);

module.exports = router;
