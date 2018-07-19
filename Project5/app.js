const express = require('express');

const app = express();

const path = require('path');

const router = express.Router();

app.use(express.static('./public'));

//router.get('/', (req, res) => res.render('index'));
app.get('/', (req, res) => res.render('./public/index.html'));

app.listen(3000, () => console.log('listening on 3000'));