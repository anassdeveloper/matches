const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
   home: String,
   away: String,
   bestPrediction: String,
   bestOdd: Number,
   categories: {type: String, default: 'football'},
   league: String,
   status: String,
   day: Date,
   time: String,
   finished: {type: Boolean, default: false},
   info:[String],
   createdAt: {
      type:Date,
      default: new Date()
   }
})


const model = mongoose.model('Match', matchSchema);

module.exports = model;