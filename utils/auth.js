const withAuth = (req, res, next) => {
    if (!req.session.urse_id) {
        res.redirect('/');
    } else {
        next();
    }
};

module.exports = withAuth;