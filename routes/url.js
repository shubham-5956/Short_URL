const express = require('express');
const {generateURL,searchId,getAnalytics} =  require("../controllers/url");
const router = express.Router();

router.post('/url', generateURL);
router.get('/:shortId',searchId);
router.get('/analytics/:shortId',getAnalytics);

module.exports = router;

