var express = require('express');
var router = express.Router();
var fs = require('fs');
var title = 'Adrenaline Fitness';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/mountainbiking', function(req, res, next) {
  fs.readFile('text/mountainbiking.txt', 'ascii', function (err, content) {
       if (err) {
           return next(err);
       }
       desc = content.split(/\r?\n/);
       res.render('mountainbiking', { title: title,
           desc: desc
           });
       });
});

router.get('/offroadrunning', function(req, res, next) {
  fs.readFile('text/offroadrunning.txt', 'ascii', function (err, content) {
       if (err) {
           return next(err);
       }
       desc = content.split(/\r?\n/);
       res.render('offroadrunning', { title: title,
           desc: desc
           });
       });
});

router.get('/personaltrainer', function(req, res, next) {
  fs.readFile('text/personaltraining.txt', 'ascii', function (err, content) {
       if (err) {
           return next(err);
       }
       desc = content.split('Costs:')[0].split(/\r?\n/);
       res.render('personaltrainer', { title: title,
           desc: desc
           });
       });
});

router.get('/roadcycling', function(req, res, next) {
  fs.readFile('text/roadcycling.txt', 'ascii', function (err, content) {
       if (err) {
           return next(err);
       }
       desc = content.split('Costs:')[0].split(/\r?\n/);
       cost = content.split('Costs:')[1].split(/\r?\n/);
       res.render('roadcycling', { title: title,
           desc: desc, cost: cost
           });
       });
});

router.get('/raceprep', function(req, res, next) {
  fs.readFile('text/raceprep.txt', 'ascii', function (err, content) {
       if (err) {
           return next(err);
       }
       desc = content.split('Costs:')[0].split(/\r?\n/);
       cost = content.split('Costs:')[1].split(/\r?\n/);
       res.render('raceprep', { title: title,
           desc: desc, cost: cost
           });
       });
});

router.get('/bushwalks', function(req, res, next) {
  fs.readFile('text/bushwalks.txt', 'ascii', function (err, content) {
       if (err) {
           return next(err);
       }
       desc = content.split('Costs:')[0].split(/\r?\n/);
       cost = content.split('Costs:')[1].split(/\r?\n/);
       res.render('bushwalks', { title: title,
           desc: desc, cost: cost
           });
       });
});

router.get('/triathlon', function(req, res, next) {
  fs.readFile('text/triathlon.txt', 'ascii', function (err, content) {
       if (err) {
           return next(err);
       }
       desc = content.split('Costs:')[0].split(/\r?\n/);
       cost = content.split('Costs:')[1].split(/\r?\n/);
       res.render('triathlon', { title: title,
           desc: desc, cost: cost
           });
       });
});

router.get('/about', function(req, res, next) {
  fs.readFile('text/about.txt', 'ascii', function (err, content) {
       if (err) {
           return next(err);
       }
       personal = content.split('Q:')[0].split(/\r?\n/);
       qual = content.split('Q:')[1].split(/\r?\n/);
       res.render('about', { title: title,
           personal: personal, qual: qual
           });
       });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: title });
});

module.exports = router;
