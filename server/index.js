const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers
app.get('/data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    id: "id-123456",
    name: "Agent 56",
    content: "Case 346"
  }));
});


app.listen(5000, (err) => {
  console.log('Listening on Port 5000');
});
