
const express = require( "express" );
const fs = require('fs');

const port = process.env.PORT || 3000;

const app = express();

const json = JSON.parse(fs.readFileSync('./src/operations.json'));

app.get( "/api/operations", (req, res) => {
    return res.json(json);
});

app.get( "/api/operations/:rib", (req, res) => {
  if ((new RegExp(/[a-zA-Z]/)).test(req.params.rib)) {
    return res.status(400).send('Parameter should be an integer');
  }
  const filteredByRib = json.filter(operation => operation.rib === req.params.rib)
  return res.json(filteredByRib);
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});