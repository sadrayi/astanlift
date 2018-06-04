exports.get = (req, res) => {
    res.render('products/product_list', { csrfToken: req.csrfToken(),activePage: { isAuthenticated:req.isAuthenticated(), product_list: true, title:'لیست محصولات'} });
};
