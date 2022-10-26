const express = require('express')
const app = express()

//installed cors
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Learn with Fun Api Running!!')
})

app.get('/courses', (req, res) => {
  res.send(courses);
})

app.get('/courses/:id', (req, res) => {
  const selectedCourse =  courses.find(crs => crs.id === req.params.id);
  console.log(selectedCourse);
  res.send(selectedCourse);
})

app.get('/checkout/:id', (req, res) => {
  const selectedCourse =  courses.find(crs => crs.id === req.params.id);
  console.log(selectedCourse);
  res.send(selectedCourse);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})