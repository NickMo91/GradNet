const dbPool = require('../../database/connection')

userModel = {
  getAllUsers: () => {
    const queryStr = "SELECT * FROM Users LIMIT 5";
    return dbPool.query(queryStr);
  }
}

module.exports = userModel;