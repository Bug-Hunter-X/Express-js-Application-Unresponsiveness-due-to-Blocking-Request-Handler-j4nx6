const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Assume a long-running operation here
  for (let i = 0; i < 1000000000; i++);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});