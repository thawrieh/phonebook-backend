const express = require('express');
const app = express();
const PORT = 3001;

let persons = [
  {
    id: 1,
    name:"Arto Hellas",
    number:"040-123456"
  },
  {
    id: 2,
    name:"Ada",
    number:"39-44-5323523"
  },
  {
    id: 3,
    name:"Dan Abramov",
    number:"39-23-234345"
  },
  {
    id:4,
    name: "Mary Poppendick",
    number:"39-23-6423122"
  }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
app.get('/api/persons', (req, res) => {
  res.json(persons);
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
