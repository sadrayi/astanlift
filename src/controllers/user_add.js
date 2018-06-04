exports.get = (req, res) => {
    res.render('user_add', {   csrfToken: req.csrfToken(),activePage: { user_add: true, title:'افزودن کاربران'} });
};
exports.post = (req, res) => {
    res.render('user_add', {   csrfToken: req.csrfToken(),activePage: { user_add: true, title:'افزودن کاربران'} });
};
