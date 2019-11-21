const express = require('express');
const parser = require('body-parser');
const Router = require("./routes")
const path = require("path")

const app = express();
const port = process.env.DB_PORT || 3000;

app.use(parser.json());
app.use(express.static(__dirname + './../dist'));
app.use("/", Router);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
// app.get('/', (req, res) => res.send('Hello G!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));