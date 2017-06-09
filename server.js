const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
const port = 8081

app.use(compression())
// app.use(express.static('./PAWEES'));
app.use('/', express.static(path.join(__dirname, 'PAWEES')))
app.use('/admin/', express.static(path.join(__dirname, 'build')))

app.get('/admin/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'PAWEES', 'index.html'))
})

app.listen(port, () => {
    console.log(`Listening on port ${port} (http://localhost:${port})`)
})
