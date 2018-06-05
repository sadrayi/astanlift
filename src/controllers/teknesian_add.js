exports.get = (req, res) => {
    res.render('teknesian_add', {   csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(),teknesian_add: true, title:'افزودن تکنسین'} });
};
exports.post = (req, res) => {
    res.render('teknesian_add', {   csrfToken: req.csrfToken(),  activePage: {isAuthenticated:req.isAuthenticated(), teknesian_add: true, title:'افزودن تکنسین'} });
};
