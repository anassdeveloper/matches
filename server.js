require('dotenv').config({path: './config.env'});
// const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

// const server = http.createServer(app);

mongoose
.connect(process.env.MONGO_URI)
.then(msg => console.log('DATABASE CONNECTED '))
.catch(err => console.log(err));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server run at : ${PORT}`)
});
