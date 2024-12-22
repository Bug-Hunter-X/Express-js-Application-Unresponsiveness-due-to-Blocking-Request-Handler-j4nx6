const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  // Simulate a long-running operation using async/await
  await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a 5-second delay
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});