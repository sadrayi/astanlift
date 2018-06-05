exports.get = (req, res) => {
  res.render('requests/request_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), request_list: true , title:'لیست درخواست ها'} });
};
exports.priodic = (req, res) => {
    res.render('requests/request_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), priodic_list: true , title:'لیست درخواست ها عقد قرارداد'} });
};
