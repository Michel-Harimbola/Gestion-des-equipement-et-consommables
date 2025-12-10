const express = require("express");
const UserController = require("../controllers/user.controller.js");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/create", auth, UserController.createUser);
router.get("/search", auth, UserController.searchUsers);
router.get("/:id", auth, UserController.getUserById);
router.get("/", auth, UserController.getAllUsers);
router.put("/:id", auth, UserController.updateUser);
router.delete("/:id", auth, UserController.deleteUser);

module.exports = router;