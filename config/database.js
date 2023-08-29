import mongoose from "mongoose" 

let uri_link = process.env.DATABASE_URL;

mongoose.connect(uri_link)
    .then((() => { 
        console.log("Database connected.");
    }))
    .catch(() => { 
        console.log("Database connection failed.");
    }); 

