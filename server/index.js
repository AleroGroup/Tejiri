const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//Middleware
app.use(bodyParser.json());
app.use(cors());

const images = require('./routes/api/images');
app.use('/api/images', images);

//This is the handle for the production
if( process.env.NODE_ENV === 'production') {

    //static folder in the server/public
    app.use(express.static(__dirname +'/public/'));

    //this is the handle for the single page application

    app.get (/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

} 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));