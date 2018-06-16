var factorModel=require('../model/factor');
exports.get = async(req, res) => {
    await factorModel.find({},function(err,factorlist) {
        console.log(factorlist.length)
        res.render('invoice_list', {
            factorlist:factorlist,
            csrfToken: req.csrfToken(),
            activePage: {isAuthenticated: req.isAuthenticated(), invoice_list: true, title: 'لیست فاکتور ها'}
        });
    });
};
exports.post = (req, res) => {
    res.render('invoice_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), invoice_list: true, title:'لیست فاکتور ها'} });
};
