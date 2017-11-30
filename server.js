const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let currentKey = 2;
const genKey = () => ++currentKey;

const tasks = [
  {
    key: 1,
    name: 'Do the washing',
    date: new Date(),
    complete: false
  },
  {
    key: 2,
    name: 'Walk the dog',
    date: new Date(),
    complete: false
  }
]

app.get('/api/tasks', (req, res) => res.send(tasks))

app.post('/api/tasks', (req, res) => {
  task = req.body;
  tasks.push(task);
  res.send(tasks);
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
