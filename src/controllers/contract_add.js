var contractmodel=require('../model/contract');
exports.get = (req, res) => {
    res.render('contract_add.html', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), contract_add: true, title:'افزودن قرارداد'} });
};
exports.view = (req, res) => {
    res.render('contract_add', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), contract_add: true,contract_view: true, title:'افزودن قرارداد'} });
};
exports.post = (req, res) => {

    var contractsave=new contractmodel(req.body);
    contractsave.save(function (err) {
        if(err)
            console.log(err);
        res.redirect('contracts?message=successedit');

    })
};
