var express = require('express');
var router = express.Router();

/* GET API Sample */
router.get('/', function(req, res, next) {
  res.json({
      hoge: 123
  });
});

module.exports = router;
