const express = require('express');
const parser = require('body-parser');
const Router = require("./routes")

const app = express();
const port = 3000

app.use(parser.json());
app.use(express.static(__dirname + './../dist'));
app.use("/", Router);
app.get('/', (req, res) => res.send('Hello G!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));