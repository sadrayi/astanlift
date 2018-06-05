exports.get = (req, res) => {
    res.render('category_list',{csrfToken: req.csrfToken(),  csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), category_list: true, title:'لیست دسته بندی محصولات'} });
};
exports.post = (req, res) => {
    res.render('category_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), category_list: true, title:'لیست دسته بندی محصولات'} });
};
