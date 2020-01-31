
const express = require('express');
const router = express.Router();
const services = require('../services/func_def');

/* GET users listing. */

router.get('/',services.cal_func);

module.exports = router;

