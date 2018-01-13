const router = require('express').Router();
const sentiment = require('./sentiment');

router.get('/', (req, res) => res.sendStatus(200));
router.use(sentiment);

module.exports = router;