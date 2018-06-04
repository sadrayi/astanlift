exports.get = (req, res) => {
    res.render('contracts', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), contracts: true, title:'لیست قرارداد ها'} });
};
exports.post = (req, res) => {
    res.render('contracts', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), contracts: true, title:'لیست قرارداد ها'} });
};
