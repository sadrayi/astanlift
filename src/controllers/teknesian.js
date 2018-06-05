exports.get = (req, res) => {
    res.render('teknesian_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), user_list: true, title:'لیست تکنسین ها'} });
};
exports.post = (req, res) => {
    res.render('teknesian_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), user_list: true, title:'لیست تکنسین ها'} });
};
