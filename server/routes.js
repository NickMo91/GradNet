const router = require('express').Router();
const userController = require('./controllers/userController')


router.get("/users", userController.getAllUsers);
router.get("/users/:user_id", userController.getSingleUser);
router.post("/users", userController.addUser);
router.post("/users/:user_id", userController.addPhoto);

module.exports = router;