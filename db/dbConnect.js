const mongoose = require("mongoose");
require('dotenv').config();

async function dbConnect() {
    // use mongoose to connect this app to our database on mongoDB using the DB_URL
    
    mongoose
        .connect(process.env.DB_URL, 
            {
                //these are options to ensure that the connnectino is done properly
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((error)=> {
            console.log("Unable to connect to the database");
            console.error(error);
        });
    }

module.exports = dbConnect;