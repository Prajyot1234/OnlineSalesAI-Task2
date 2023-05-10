const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// Router Imports
const evaluateRoutes = require('./routers/evaluate');

//creating app instance using express.
const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//it will handle all cors errors
app.use(cors());

//using routes using router
app.use('/evaluate',evaluateRoutes);

//for local purpose its running on 3004 port.
const PORT = process.env.PORT || 3004;
app.listen(PORT,() => { 
    console.log(`listening to the server on Port ${PORT}`);   
});