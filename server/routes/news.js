var express = require('express');
var router = express.Router();
var helper = require('mongoskin').helper;

var auth = require('../auth');
var News = require('../news').News;

// News.create({
//   title: '下周三中期汇报',
//   article: '下周三中期汇报，又要演示啦'
// },function(){
//   console.log(arguments);
// });
// News.find().skip(3).limit(3).exec(function(){
//   console.log(arguments);
// });
var db = require('../database');
/* GET users listing. */
router.get('/', function(req, res, next) {

  // db.collection('objects').insert({
  //     _key:'news',
  //     title: 'React native',
  //     desc: 'I’m message'
  // },function(err, result){
  //   if(err) throw err;
  //   if(result) console.log(result);
  // });
  var page = Number(req.query.page);

  var pageRows = Number(req.query.pageRows);
  console.log(page);
  console.log(pageRows);
  db.collection('objects').find().skip((page-1)*pageRows).limit(pageRows).toArray(function(err, result){
    if(err) throw err;
    res.type('json');
    res.json({
        page:page,
        pageRows:pageRows,
        rows: result
    });
  });

});


router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  db.collection('objects').findOne({'_id': helper.toObjectID(id)},function(err, result){
    if(err) throw err;
    if(result == null) {
      res.status(404).end();
    } else {
      res.type('json').json(result);
    }
  });

});

module.exports = router;
