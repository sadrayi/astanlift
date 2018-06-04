exports.get = (req, res) => {
    res.render('invoice_detail', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), invoice_detail: true, title:'جزئیات فاکتور'} });
};
exports.post = (req, res) => {
    res.render('invoice_detail', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), invoice_detail: true, title:'جزئیات فاکتور'} });
};
