const path = require('path');
const express = require('express');
const multer = require('multer');


const Ajv = require('ajv');
const ajv = new Ajv();

const router = express.Router();


const uploadDir = path.join(__dirname, '../public/uploads/');
//console.log(uploadDir)
const upload = multer({ dest: uploadDir });

const arrAuthors = require('../model/authorModel');
const titleModal = require('../model/titleModel');


 
const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);

router.get('/', (req,res) =>{
    res.render(createPath('page'));
    
});
//показує список наших авторів з сервера
router.get('/author', (req, res) => {
    res.json(arrAuthors);
    console.log('arrAuthors:', arrAuthors)
});



//показує список наших авторів в селекті
router.post('/', (req, res) => {
    res.json(arrAuthors)
    //console.log('arrAuthorsList:',arrAuthorsList)
})

//добавляєм список авторів в масив
router.post('/add', (req,res) => {
    arrAuthors.push({id_author: arrAuthors.length + 1, name:req.body.name})
    //console.log('arrAuthors:',arrAuthors)
})

module.exports = router;