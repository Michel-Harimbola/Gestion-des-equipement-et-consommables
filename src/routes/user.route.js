const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller.js");
const authentification = require("../middlewares/authMiddleware.js");

router.post("/create", authentification, UserController.createUser);
router.get("/:id", authentification, UserController.getUserById);
router.get("/allUsers", authentification, UserController.getAllusers);
router.put("/:id", authentification, UserController.updateUser);
router.delete("/:id", authentification, UserController.deleteUser);

module.exports = router;