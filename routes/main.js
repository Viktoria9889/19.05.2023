const path = require('path');
const express = require('express');
const multer = require('multer');


const Ajv = require('ajv');
const ajv = new Ajv();

const router = express.Router();


const uploadDir = path.join(__dirname, '../public/uploads/');
//console.log(uploadDir)
const upload = multer({ dest: uploadDir });

const arrAuthors = [
    { 
        name: 'виберіть автора',
    }
  ];
  const arrTitle = [ 
  ];

const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);

router.get('/', (req,res) =>{
    const title = 'Home';
    res.render(createPath('page'), { title});
    
});

router.post('/', (req, res) => {
    res.json(arrAuthors)
    console.log('arrAuthors:',arrAuthors)
})


router.get('/add-post', (req,res) => {
    const title = 'createTitle';
    res.render('pageTitle', { title });
    
})
router.post('/add', (req,res) => {
    arrAuthors.push(req.body)
})


router.get('/view', (req,res) => {

    const title = 'createView';
    res.render(createPath('pageView'), { title })
})


router.post('/view', (req, res) => {
    res.json(arrTitle)
    console.log('arrTitle:',arrTitle)
})
router.post('/view-add', (req, res) => {
    arrTitle.push(req.body)
    //console.log('arrTitle:',arrTitle)
})


module.exports = router;