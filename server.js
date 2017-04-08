const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const port = 8083;

app.use(compression());
// app.use(express.static('./PAWEES'));
app.use('/staging', express.static('./PAWEES'));

app.get('/staging/*', function (req, res) {
	res.sendFile(path.join(__dirname, './PAWEES', 'index.html'));
});

app.listen(port, () => {
	console.log(`Listening on port ${port} (http://localhost:${port})`);
});