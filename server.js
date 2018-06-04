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

app.get('/boothLocation', function(req,res){
    let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + req.query.lat + "," + req.query.lng + '&radius=1500&keyword=elections&key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg';
    axios.get(url, {mode: 'cors', headers:{
    'Access-Control-Allow-Origin':'*'
    }
  })
  .then(function(response) {
    console.log(response.data);
    res.json(response.data.results)
  })
  .catch(function(err){
    console.log(err);
    res.json(err)
  })
})

app.get('/travelTime', function(req, res){
// function travelTime(originLat, originLng, destLat, destLng){
  let url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + req.query.lat + ',' + req.query.lng + '&destination=' + req.query.destLat + ',' + req.query.destLng + '&key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg';
  axios.get(url, {mode: 'cors', dataType: 'json', headers:{
    'Access-Control-Allow-Origin':'*'
    }
  })
  .then(function(response) {
    console.log(response.data);
    res.json(response.data)
  })
  .catch(function(err){
    console.log(err);
    res.json(err)
  })
})

