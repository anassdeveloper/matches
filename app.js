const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({origin: ['https://tawa9o3at.netlify.app','http://localhost:5173'], credentials: true}))

const matchRouter = require('./routes/matchRouter');

app.get('/', (req, res)=> {
    res.status(200).json({message: 'welcome to the server'})
});

app.use('/api/v1/matches', matchRouter);


module.exports = app;