const router = require('express').Router();
const fetchAnalysis = require('../handlers/fetchAnalysis');
const postData = require('../handlers/postData');
const deleteAnalysis = require('../handlers/deleteAnalysis');


router.route('/sentiment')
  .get(fetchAnalysis)
  .post(postData)
  .delete(deleteAnalysis)

module.exports = router;