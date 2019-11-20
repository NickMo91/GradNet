const router = require('express').Router();
const userController = require('./controllers/userController')


router.get("/users", userController.getAllUsers);
router.get("/users/:user_id", userController.getSingleUser);
router.post("/users", userController.addUser);

module.exports = router;