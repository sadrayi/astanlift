var factorModel=require('../model/factor');
exports.get = async(req, res) => {
    display(req,res,null);
};
exports.nezarat =async (req, res) => {
    display(req, res,'درخواست مشاوره و نظرات');
};
exports.standard =async (req, res) => {
    display(req, res,'درخواست استاندارد');
};
exports.contract =async (req, res) => {
    display(req, res,'عقد قرارداد سرویس ماهیانه');
};
exports.repair =async (req, res) => {
    display(req, res,'درخواست تعمیر');
};
exports.poshtibani =async (req, res) => {
    display(req, res,'درخواست پشتیبانی اداری');
};
exports.asansorsale =async (req, res) => {
    display(req, res,'فروش آسانسور');
};
var display=async function(req,res,kind){
    if (kind!==null)
        title='ی '+kind;
    else
        title="";
    await factorModel.find({requestkind:kind},function(err,factorlist) {
        console.log(factorlist.length)
        res.render('invoice_list', {
            factorlist:factorlist,
            csrfToken: req.csrfToken(),
            activePage: {isAuthenticated: req.isAuthenticated(), invoice_list: true, title: 'لیست فاکتور ها'+title}
        });
    });
};

exports.post = (req, res) => {
    res.render('invoice_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), invoice_list: true, title:'لیست فاکتور ها'} });
};
