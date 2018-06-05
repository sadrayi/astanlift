exports.get = (req, res) => {
    res.render('factor_add', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), factor_add: true, title:'ثبت فاکتور'} });
};
exports.post = (req, res) => {
    res.render('factor_add', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), factor_add: true, title:'ثبت فاکتور'} });
};
