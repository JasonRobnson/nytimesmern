const router = require('express').Router();
const articleRoutes = require('./article');

router.use('/article', articleRoutes);

module.exports = router;