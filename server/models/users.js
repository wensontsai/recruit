var DB = require('../db');

var COLLECTION = 'users';

// ------------------------------------
// ADMIN Operations
// ------------------------------------
// Get all users
exports.all = function(cb) {
  db = DB.getDB()
  db.collection(COLLECTION).find().toArray(cb)
}
// Create new user and return its id
exports.create = function(user, text, cb) {
  db = DB.getDB()
  db.collection(COLLECTION).insert({user: user, email: email}, function(err, docs) {
    if (err) return cb(err)
    cb(null, docs[0]._id)
  })
}
// Remove a user
exports.remove = function(id, cb) {
  db = DB.getDB()
  db.collection(COLLECTION).remove({_id:id}, function(err, result) {
    cb(err)
  })
}