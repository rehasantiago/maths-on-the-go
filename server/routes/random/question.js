const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const QuesSchema = require('../../models/Ques');
const {users,levels,random} = require('../../connections/connections');

const question = random.model('questions',QuesSchema);

router.get('/question', (req,res) => {
    question.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        var keys = Object.keys(quesMap);
        var max = keys.length;
        var random = [];
        var newMap = {};
        var temp2;
        for(var i = 0;i<10 ; i++){
            var temp = Math.floor(Math.random()*max);
            if(random.indexOf(temp) == -1){
                random.push(temp);
                console.log('nitin chava'+quesMap[keys[temp]]);
                temp2 = quesMap[keys[temp]];
                for(let key in quesMap){
                    if(quesMap[key] == temp2) newMap[key] = temp2;
                }
            }
            else
            i--;
        }
        console.log(random);
        res.send(newMap);
    })
})

module.exports = router;