exports.get = (req, res) => {
    res.render('contract_add', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), contract_add: true, title:'افزودن قرارداد'} });
};
exports.view = (req, res) => {
    res.render('contract_add', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), contract_add: true,contract_view: true, title:'افزودن قرارداد'} });
};
exports.post = (req, res) => {
    res.render('contract_add', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), contract_add: true, title:'افزودن قرارداد'} });
};
