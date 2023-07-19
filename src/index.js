const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/name', (req, res) => {
  res.send('Helle name');
});

app.post('/name', (req, res) => {
  const { firstname, lastname } = req.body;
  res.send(`${firstname} ${lastname}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
