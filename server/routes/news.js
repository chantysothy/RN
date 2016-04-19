var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.type('json');
  res.json({
      page:1,
      pageRows:10,
      rows: [
          {
              id:1,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:2,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:3,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:4,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
          {
              id:5,
              title: 'React native',
              desc: 'I’m message'
          },
      ]
  });
});

module.exports = router;
