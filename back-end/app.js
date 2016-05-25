'use strict';

var bodyParser = require('body-parser')
  , cors = require('cors')
  , express = require('express')
  , db = require('./db')
  , Item = require('./item')
  , app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/cestadecompras', function(req, res) {
  var query = [];

  Item.find(query, function(err, data) {
    res.status(200).json(data);
  });
});

app.post('/cestadecompras', function(req, res) {
  new Item(req.body).save(function(err, data) {
    if(err) {
      res.status(401).json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Express server listening on port ' + 3000);
});
