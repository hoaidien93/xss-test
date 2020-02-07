var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data',(req,res)=>{
  console.log(req.body.message);
  fs.appendFileSync("message.txt",req.body.message + '\n');
  return res.end();
})

router.get('/getData',(req,res)=>{
  let data = fs.readFileSync("message.txt",'utf-8');
  return res.render("message",{
    data: data
  });
});


module.exports = router;
