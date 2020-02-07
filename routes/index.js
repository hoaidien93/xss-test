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
module.exports = router;
