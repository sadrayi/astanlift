exports.get = (req, res) => {
    res.render('products/product_add', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), product_add: true, title:'افزودن محصول'} });
};
