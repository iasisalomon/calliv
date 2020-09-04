//***MODULE REQUIRE***//
var express = require('express');
var router = express.Router();

//***ROUTERS REQUIRE***//
const indexController = require('../controllers/indexController')

//***ROUTES***//
router.get('/', indexController.root);
module.exports = router;
