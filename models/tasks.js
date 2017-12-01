const { mongoose, db } = require('../database');
Task = db.model('Task', {name: String, date: String, complete: Boolean, key: Number});

module.exports = Task;
