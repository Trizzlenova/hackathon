let express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    axios       = require('axios')
    db          = require('./models'),
    controllers = require('./controllers');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

app.get('/', function homepage(req, res) {
  res.sendFile('views/index.html', { root: __dirname});
});


app.listen(process.env.PORT || 3000, function(){
  console.log("I'm listening on 3000")
})
