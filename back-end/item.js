'use strict';

var mongoose = require('mongoose')
  , Item = mongoose.model('Item', new mongoose.Schema({
      nome: {
        type: mongoose.Schema.Types.String,
        required: true,
        trim: true
      }
    }));

module.exports = Item;
