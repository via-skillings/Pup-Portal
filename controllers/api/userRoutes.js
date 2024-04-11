const router = require('express').Router();
const { User } = require('../../models');

router.use((req, res, next) => {
    console.log("===============================userRoutes HIT ==================================")
    next()
});

//API route for login POST request
router.post('/login', async (req, res) => {
    console.log('Req Body: ', req.body)
    try {
        //this finds the user who matches up with the email address
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log("Üser Found: ", userData)
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password' });
            return;
        }

        //this verifies that the password that was entered matches the password that is stored in the database
        const validPassword = await userData.checkPassword(req.body.password);
        console.log("Vaild: ", validPassword);
        
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        //this creates the session for the user that is logged in
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged in' });
        });

    } catch (err) {
        console.log("error: ", err);
        res.status(400).json(err);
    }
});

//COMMENTED OUT FOR CLARITY UNTIL LOGOUT ROUTE IS MADE
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        //this removes the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;