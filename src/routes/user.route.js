const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller.js");
const auth = require("../middlewares/authMiddleware.js");

router.post("/create", auth, UserController.createUser);
router.get("/:id", auth, UserController.getUserById);
router.get("/", auth, UserController.getAllUsers);
router.put("/:id", auth, UserController.updateUser);
router.delete("/:id", auth, UserController.deleteUser);

module.exports = router;