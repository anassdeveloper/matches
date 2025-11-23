const Match = require('../models/matchModel');
const APIFeatures = require('../utils/APIFeatures');

exports.getAllMatches = async (req, res, next) => {
    try{
       
       const matches = new APIFeatures(Match.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

       const docs = await matches.query;
    //    const matches = await Match.find();

       res.status(200).json({
        status: 'success',
        results: docs.length,
        data: {
            docs
        }
       })
    }catch(err){
        console.log(err);
    }
}


exports.createMatch = async (req, res) => {
 
    try{

        console.log(req.body.day);

       const {
          home,
          away,
          league,
          time, 
          bestOdd, 
          bestPrediction, 
          categories, status,
          day
       } = req.body;

       

    const match = await Match.create({
           home,
           away,
           league,
           time,
           bestOdd: Number(bestOdd),
           bestPrediction,
           day,
           info: [home, away,league, categories, status ]
           , categories, status 
        });


        res.status(201).json({
            status: 'success',
            data: {
             match
           }
        })
    }catch(err){
        console.log(err);
    }

}

exports.clearDataCollection = async (req, res) => {
    try{
        await Match.deleteMany({});
        res.status(202).json({status: 'success', data: null})
    }catch(err){
        console.log(err);
    }
}