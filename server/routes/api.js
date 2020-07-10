const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = "mongodb+srv://usershahriar:passwordshahriar@users.kmmww.mongodb.net/<dbname>?retryWrites=true&w=majority" ;

mongoose.connect(db, err => {
    if(err){
        console.error('Error!' + err)
    }else{
        console.log('Connected to mongodb');
    }
})

router.get('/', (req, res)=>{
    res.send('From API route');

})

module.exports = router;