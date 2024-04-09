const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dogRoutes = require('./dogRoutes');

//middleware to console log when API routes are hit for clarity
router.use((req, res, next) => {
    console.log("===============================APIROUTES HIT ==================================")
    next()
});
//creates express middleware for userRoutes API route
router.use('/users', userRoutes);
//creates express middleware for dogRoutes API route
router.use('/dogs', dogRoutes);

module.exports = router;