const router = require('express').Router();
const { User, Dog} = require('../models');
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
    //renders homepage view, checks if user is authorized so that header layout can change links dynamically
    //res.render accepts handlebars layout name and object as parameters
    res.render("homepage", {logged_in: req.session.logged_in});
});

//this prevents someone who is not logged in from viewing the main page
//THIS SECTION IS COMMENTED OUT FOR CLARITY UNTIL ROUTE IS BUILT, NOT SURE WE NEED THIS
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
    console.log("login home route hit")
    //if user already logged in, redirect to home page at '/' homeRoute, otherwise respond with view of login page
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
//renders login.handlebars view as the response
    res.render('login');
});

// //test new dog route without auth: DELETE LATER, CURRENTLY LEFT IN SO WE CAN TEST THE FORM AND ROUTE WITH LOGIN STILL BROKEN
// router.get('/newdog', async (req, res) => {
//     try {
//         //renders newdog handlebars view
        
//         res.render('newdog');
//         //catch error if not successful
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//homeroute endpoint for clicking on /newdog anchor on homepage uses withAuth so only logged in users can add a new dog:
router.get('/newdog', withAuth, async (req, res) => {
        try {
            //renders newdog handlebars view
            //passes session authentication object with info about login status
            res.render('newdog', {logged_in: req.session.logged_in});
            //catch error if not successful
        } catch (err) {
            res.status(500).json(err);
        }
    });

    //homeRoute endpoint to render get all dogs view
    router.get('/viewalldogs', withAuth, async (req, res) => {
        try {
            //renders newdog handlebars view
            //passes session authentication object with info about login status
            const dogData = await Dog.findAll().catch((err) => { 
                res.json(err);
              });
                const dogs = dogData.map((dog) => dog.get({ plain: true }));
                res.render('viewalldogs', { dogs, logged_in: req.session.logged_in });

            //catch error if not successful
        } catch (err) {
            res.status(500).json(err);
        }
    });

    //post route to log out
    // router.post('/logout', function(req, res) {
    //     req.session.destroy(() => {
    //         res.status(204).end();});
    // })

    
 //export the router module for user throughout the app   
module.exports = router;

