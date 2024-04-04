const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//this prevents someone who is not logged in from viewing the main page
router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) => project.get({ plain: true }));

        res.render('mainpage', {
            users,
            //this passes the logged in flag
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    //this will redirect the request to the main page of the session exists
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;