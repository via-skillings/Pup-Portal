const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

//makes middleware for home routes and API routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

//I moved the userRoutes controller into the api folder index.js because it doesn't belong in the main/home routes index, that debugged our controllers -VG