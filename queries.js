var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/pledge';
var db = pgp(connectionString);

module.exports = {
  createUser: createUser,
  createFriend: createFriend,
  deleteFriend: deleteFriend,
  createGoal: createGoal,
  updateGoal: updateGoal,
  deleteGoal: deleteGoal,
  getAllGoals: getAllGoals
};
