var express = require('express');

var app = express();
var router = require('./router/router');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

var db = require('./models/db');

app.get('/', router.showIndex);

app.get('/add', router.showAdd);

app.get('/doadd', router.doadd);

app.get('/edit/:sid', router.edit);

app.get('/doedit', router.doedit);

app.get('/delete/:sid', router.delete);

app.listen(3050);
