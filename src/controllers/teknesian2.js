exports.get = (req, res) => {
    res.render('teknesian_list2', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), teknesian_list2: true, title:'لیست تکنسین ها'} });
};
exports.post = (req, res) => {
    res.render('teknesian_list2', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), teknesian_list2: true, title:'لیست تکنسین ها'} });
};
