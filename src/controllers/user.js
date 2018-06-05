exports.get = (req, res) => {
    res.render('user_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), user_list: true, title:'لیست کاربران'} });
};
exports.post = (req, res) => {
    res.render('user_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), user_list: true, title:'لیست کاربران'} });
};
