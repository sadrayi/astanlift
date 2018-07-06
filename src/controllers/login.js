var sherkatModel =require("../model/sherkatha");

exports.get = (req, res) => {
    res.render('login', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), calendar: true, title:'تقویم کاری مجید صدرایی'} });
};
exports.post =async (req, res) => {
    await sherkatModel.find({kind:kind}).then(async function (res3) {
        res.render('blog/matlab_list', {
            products: res3,
            message: {kind: message, content: content},
            csrfToken: req.csrfToken(),
            activePage: {isAuthenticated: req.isAuthenticated(), product_add: true, title: 'لیست '+kind}
        });
    });
    res.render('calendar', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), calendar: true, title:'تقویم کاری مجید صدرایی'} });
};
