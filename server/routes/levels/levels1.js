const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CategoriesSchema = require('../../models/Categories');
const {users,levels} = require('../../connections/connections');
<<<<<<< HEAD
=======
const token = require('../../token/token');

>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae

const Addition = levels.model('additions',CategoriesSchema);
const Substraction = levels.model('substractions',CategoriesSchema);
const AdditionSubstraction = levels.model('additionSubstraction',CategoriesSchema);
const Division = levels.model('divisions',CategoriesSchema);
const Multiplication = levels.model('multiplications',CategoriesSchema);
const Mix = levels.model('mix',CategoriesSchema);


<<<<<<< HEAD
router.get('/addition', (req,res)=> {
=======
router.get('/addition',token.auth, (req,res)=> {
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
    Addition.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
<<<<<<< HEAD
        })
=======
        });
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
        res.send(quesMap);
    })
})

<<<<<<< HEAD
router.get('/substraction', (req,res)=> {
=======
router.get('/substraction',token.auth,  (req,res)=> {
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
    Substraction.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
<<<<<<< HEAD
        })
=======
        });
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
        res.send(quesMap);
    })
})

<<<<<<< HEAD
router.get('/additionsubstraction', (req,res)=> {
=======
router.get('/additionsubstraction',token.auth,  (req,res)=> {
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
    AdditionSubstraction.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

<<<<<<< HEAD
router.get('/division', (req,res)=> {
=======
router.get('/division',token.auth,(req,res)=> {
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
    Division.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

<<<<<<< HEAD
router.get('/multiplication', (req,res)=> {
=======
router.get('/multiplication',token.auth,(req,res)=> {
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
    Multiplication.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

<<<<<<< HEAD
router.get('/mix', (req,res)=> {
=======
router.get('/mix',token.auth,(req,res)=> {
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
    Mix.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

module.exports = router;