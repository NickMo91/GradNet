const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + './../dist'));
app.get('/', (req, res) => res.send('Hello G!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))