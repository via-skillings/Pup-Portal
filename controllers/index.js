const router = require('express').Router();
const userRoutes = require('./userRoutes');

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes');

router.use('/users', userRoutes);
router.use('/', mainRoutes);
router.use('/api', apiRoutes);

module.exports = router;