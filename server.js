const express = require('express')
const app = express()

tasks = [
  {
    key: 1,
    name: 'Do the washing',
    date: new Date("October 13, 2014 11:13:00"),
    complete: false
  },
  {
    key: 2,
    name: 'Walk the dog',
    date: new Date("October 13, 2014 11:15:00"),
    complete: false
  }
]

app.get('/api/tasks', (req, res) => res.send(tasks))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
