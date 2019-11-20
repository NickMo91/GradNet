const userModel = require('../models/userModel')

userController = {
  getAllUsers: (req, res) => {
    userModel.getAllUsers()
    .then(results => {
      console.log("success getting users")
      res.send(results);
    })
    .catch(err => console.error("ERROR getting users: ", err))
  }
}

module.exports = userController;