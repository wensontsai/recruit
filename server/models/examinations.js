var DB = require('../db');

var COLLECTION = 'examinations';

// Create new examination and return its id
exports.create = function(exam, text, cb) {
  db = DB.getDB()
  db.collection(COLLECTION).insert({user_id: user_id, start_time: start_time, finish_time: finish_time, completed: completed }, function(err, docs) {
    if (err) return cb(err)
    cb(null, docs[0]._id)
  })
}

// ------------------------------------
// ADMIN Operations
// ------------------------------------
// Get all examinations
exports.all = function(cb) {
  db = DB.getDB()
  db.collection(COLLECTION).find().toArray(cb)
}
// Remove a examination
exports.remove = function(id, cb) {
  db = DB.getDB()
  db.collection(COLLECTION).remove({_id:id}, function(err, result) {
    cb(err)
  })
}