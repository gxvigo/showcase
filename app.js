var express = require('express');

var app = express();

app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));
app.use(require ('./routes/index')); // load index.js route

var server = app.listen(app.get('port'), function(){
    console.log("### Showcase app listening on port " + app.get('port'));
});