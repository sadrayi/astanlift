var requestModel=require('../model/request');
var factorModek=require('../model/factor');
exports.get = async(req, res) => {
    await requestModel.findOne({_id:req.query.id}).then(async function (res2) {
        if(res2!==null)
        res.render('factor_add', {
            id:req.query.id,
            request:res2,
            csrfToken: req.csrfToken(),
            activePage: {isAuthenticated: req.isAuthenticated(), factor_add: true, title: 'ثبت فاکتور'}
        });
        else
        res.render('factor_add', {
            id:req.query.id,
            csrfToken: req.csrfToken(),
            activePage: {isAuthenticated: req.isAuthenticated(), factor_add: true, title: 'ثبت فاکتور'}
        });
    });
};
exports.post = async(req, res) => {
    var body= req.body;
    var factorSave=new factorModek({
        phone:  body.phone,
        requestid:  body.requestid,
        requester:  body.requester,
        requestkind:body.requestkind,
        arzeshafzude:  body.arzeshafzude,
        title: body.title,
        percost:body.percost,
        factordate:new Date(),
        quantity:body.quantity,
        comment:body.comment,
        factorcount:body.factorcount,
        factorsum:body.factorsum,
        factormaliat:body.factormaliat,

    });
    await factorSave.save().then(function (err) {
        if(err)
            console.log(err);
        requestModel.findOneAndUpdate({_id:req.body.requestid},{$set:{status:"factoradded"}}, function (err) {
            if(err)
                console.log(err);
            res.redirect('request_list?message=successaddfactor');
        });
    })
};
