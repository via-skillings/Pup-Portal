const withAuth = (req, res, next) => {
    //this redirects the user to log in if they have not already logged in
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
