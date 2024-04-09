const router = require('express').Router();
const userRoutes = require('./userRoutes');

//middleware to console log when API routes are hit for clarity
router.use((req, res, next) => {
    console.log("===============================APIROUTES HIT ==================================")
    next()
})
//creates express middleware for userRoutes API route
router.use('/users', userRoutes);

module.exports = router;