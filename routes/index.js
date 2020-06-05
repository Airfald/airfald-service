var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Airfald' });
  request('https://image.baidu.com/search/acjson?tn=resultjson_com&catename=pcindexnew&ipn=rj&ct=201326592&is=&fp=result&queryWord=&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=pcindexnew&face=0&istype=2&qc=&nc=1&fr=&pn=0&rn=30', function (error, response, body) {
    console.log(error, response)
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body);
      var body = $('body').html();
      res.send(body);
    }
  })
});

module.exports = router;
