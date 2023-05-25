const path = require('path');
const express = require('express');
const multer = require('multer');
const arrAuthors = require('../model/authorModel');

const Ajv = require('ajv');
const ajv = new Ajv();

const router = express.Router();


const uploadDir = path.join(__dirname, '../public/uploads/');
//console.log(uploadDir)
const upload = multer({ dest: uploadDir });

const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);

router.get('/add-post', (req,res) => {
    res.render('pageTitle');
    
})




module.exports = router;