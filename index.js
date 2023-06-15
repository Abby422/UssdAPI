const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const mongoose = require('mongoose');
const PORT = 8000;
//MODELS
const user = require('./model/user');

//MONGODB CONNECTION
const database_url = "mongodb://127.0.0.1:27017/test";
mongoose.connect(database_url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to database");
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/' , (req, res) => {
    const {phoneNumber, text, sessionId} = req.body;
    let response;
    if (text === "") {
        response = "CON Welcome, enter your name \n";
    }
    else if (text !== "") {
        let arr = text.split("*");
        if (arr.length === 1){
            response = "CON Enter your ID number \n";
        }
        else if(arr.length === 2) {
            if (parseInt(arr[1]) > 0) {
                response = "CON Please confirm if you want to register with the following details \n 1. Confirm \n 2. Cancel";
            }
            else {
                response = "END Invalid input, Please try again";
            }
        }
        else if (arr.length === 3) {
            if(parseInt(arr[2]) === 1) {
                let newUser = new user();
                newUser.name = arr[0];
                newUser.id_Number = arr[1];
                newUser.save().then((user) => {
                    console.log(user)
                    response = "END You have been registered successfully";
                }).catch((err) => {
                    console.log(err);
                    response = "END There was an error, Please try again";
                });
            } 
            else if(parseInt(arr[2]) === 2) {
                response = "END You have cancelled the registration";
            }
        } 
        else {
        console.log(text);
        response = "END Invalid input, Please try again";
    }
    }
    


    setTimeout(() => {
        res.send(response);
        res.end();
    }, 3000);
});



app.listen(PORT, () => {   
    console.log(`Server is running on port ${PORT}`);
});


