const userModel = require('../models/userModel')

userController = {
  getAllUsers: (req, res) => {
    userModel.getAllUsers()
    .then(results => {
      console.log("success getting users")
      res.send(results.rows);
    })
    .catch(err => console.error("ERROR getting users: ", err))
  },

  getSingleUser: (req, res) => {
    const userId = [req.params.user_id];
    userModel.getSingleUser(userId)
    .then(results => {
      console.log("success getting single user:")
      res.send(results.rows);
    })
    .catch(err => {
      console.error("ERROR getting single user: ", err)
    })
  },

  addUser: (req, res) => {
    const params = [req.body.first_name, req.body.last_name, req.body.username, req.body.email, req.body.password, req.body.biography, req.body.job_title, req.body.photo]
    return userModel.addUser(params)
    .then(() => {
      console.log("success adding user!")
      res.sendStatus(201);
    })
    .catch(err => {
      console.error("ERROR adding user", err)
    })
  }
}

module.exports = userController;