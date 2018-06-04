exports.get = (req, res) => {
    res.render('invoice_list', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), invoice_list: true, title:'لیست فاکتور ها'} });
};
exports.post = (req, res) => {
    res.render('invoice_list', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), invoice_list: true, title:'لیست فاکتور ها'} });
};
