const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
   home: String,
   away: String,
   bestPrediction: String,
   bestOdd: Number,
   categories: {type: String, default: 'football'},
   league: String,
   status: String,
   date: Date,
   time: String,
   finished: {type: Boolean, default: false},
   info:[String]
})


const model = mongoose.model('Match', matchSchema);

module.exports = model;