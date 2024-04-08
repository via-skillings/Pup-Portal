const router = require('express').Router();
const { User } = require('../models');
//withAuth allows us to only render certain pages to authorized users
const withAuth = require('../utils/auth');

//middleware tracks when homeRoutes are hit and logs that to console
router.use((req, res, next) => {
    console.log("===============================HOMEROUTES HIT ==================================")
    next()
})

//need to make home page only accessible to authorized users, otherwise display login page
router.get('/', (req, res) => {
    console.log("homepage hit")
    res.render("homepage")
});
//this prevents someone who is not logged in from viewing the main page
//THIS SECTION IS COMMENTED OUT FOR CLARITY UNTIL ROUTE IS BUILT
// router.get('/', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findAll({
//             attributes: { exclude: ['password'] },
//             order: [['name', 'ASC']],
//         });

//         const users = userData.map((project) => project.get({ plain: true }));

//         res.render('mainpage', {
//             users,
//             //this passes the logged in flag
//             logged_in: req.session.logged_in,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/login', (req, res) => {
    //if user already logged in, redirect to home page at '/' homeRoute, otherwise respond with view of login page
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
//renders login.handlebars view as the response
    res.render('login');
});

module.exports = router;