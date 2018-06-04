exports.get = (req, res) => {
    res.render('products/product_detail', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), product_detail: true, title:'جزئیات محصول'} });
};
