exports.get = (req, res) => {
    res.render('pricing_table', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), pricing_table: true, title:'لیست پکیج های فروش'} });
};
