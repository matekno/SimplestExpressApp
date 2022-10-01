const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/health', (req, res) => {
  res.send(200);
});

app.get('/error', (req, res) => {
  res.send(500);
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
