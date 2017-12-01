const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let Task = require('./models/tasks');

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
  Task.find().then((tasks) => {
    res.send(tasks)
  })
})

app.post('/api/tasks', (req, res) => {
  let name = req.body.name;
  let date = req.body.date;
  let complete = req.body.complete;
  let key = req.body.key;
  Task.create({ name, date, complete, key}).then((task) => {
    res.send(task);
  })
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
