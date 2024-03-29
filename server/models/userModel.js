const dbPool = require('../../database/connection')

userModel = {
  getAllUsers: () => {
    const queryStr = "SELECT * FROM Users";
    return dbPool.query(queryStr);
  }, 

  getSingleUser: (userId) => {
    const queryStr = "SELECT * FROM users WHERE users.id = $1";
    return dbPool.query(queryStr, userId);
  }, 

  addUser: (params) => {
    const queryStr = `INSERT INTO users (first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5)`;
    return dbPool.query(queryStr, params);
  },

  addUserPhoto: (params) => {
    const queryStr = `UPDATE users SET photo = $1 WHERE users.id = $2`;
    return dbPool.query(queryStr, params);
  }
}

module.exports = userModel;