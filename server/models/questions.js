var DB = require('../db');

var COLLECTION = 'questions';

// ------------------------------------
// ADMIN Operations
// ------------------------------------
// Get all questions
exports.all = function(cb) {
  db = DB.getDB()
  db.collection(COLLECTION).find().toArray(cb)
}
// Create new question and return its id
exports.create = function(exam, text, cb) {
  db = DB.getDB()
  db.collection(COLLECTION).insert({content: content}, function(err, docs) {
    if (err) return cb(err)
    cb(null, docs[0]._id)
  })
}
// Remove a question
exports.remove = function(id, cb) {
  db = DB.getDB()
  db.collection(COLLECTION).remove({_id:id}, function(err, result) {
    cb(err)
  })
}