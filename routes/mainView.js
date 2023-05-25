const path = require('path');
const express = require('express');
const multer = require('multer');
const arrTitle = require('../model/titleModel');


const Ajv = require('ajv');
const ajv = new Ajv();

const router = express.Router();


const uploadDir = path.join(__dirname, '../public/uploads/');
//console.log(uploadDir)
const upload = multer({ dest: uploadDir });
let index = 0;

const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);


router.get('/view', (req,res) => {
    res.render(createPath('pageView'))
})


router.post('/view', (req, res) => {
    res.json(arrTitle)
    console.log('arrTitle:',arrTitle)
})



router.post('/view-add', (req, res) => {
  arrTitle.push({id: arrTitle.length + 1, title:req.body.title, text: req.body.text, name: req.body.name})
    //console.log('arrTitle:',arrTitle)
})


module.exports = router;