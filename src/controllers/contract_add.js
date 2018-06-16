var contractmodel=require('../model/contract');
var requestModel=require('../model/request');
var Teknesian=require('../model/teknesian');
exports.get = async(req, res) => {
    var contracts=null
    if(typeof req.query.cid!=='undefined') {
        await contractmodel.findOne({_id: req.query.cid}, async function (err, contract) {
            if(!err)
            contracts=contract;
        });
    }
    else
    if(typeof req.query.id!=='undefined') {
        await requestModel.findOne({_id: req.query.id}, async function (err, contract) {
            if(!err)
                contracts=contract;
        });
    }
    await Teknesian.find({},async function (err,teknesian) {
        if( contracts!==null)
        res.render('contract_add', {
            teknesian:teknesian,
            contract:contracts,
            csrfToken: req.csrfToken(),
            activePage: {isAuthenticated: req.isAuthenticated(), contract_add: true, title: 'افزودن قرارداد'}
        });
        else
        res.render('contract_add', {
            teknesian:teknesian,
            csrfToken: req.csrfToken(),
            activePage: {isAuthenticated: req.isAuthenticated(), contract_add: true, title: 'افزودن قرارداد'}
        });
    });
};
exports.view = (req, res) => {
    res.render('contract_add', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), contract_add: true,contract_view: true, title:'افزودن قرارداد'} });
};
exports.post = (req, res) => {
    req.body.contractenddate=req.body.contractduration;
    var year=req.body.contractenddate.getFullYear()
    req.body.contractenddate.setFullYear(+1);
    var contractsave=new contractmodel(req.body);
    contractsave.save(async function (err) {
        if(err)
            console.log(err);
        var perioddate=round(365/req.body.servicepersal);
        for(e=0;e<req.body.servicepersal;e++)
        {
            var requestdate=new Date(req.body.firstservicedate.setTime( req.body.firstservicedate.getTime() + ((perioddate*(e+1)) * 86400000 )));

            var requestSave = new requestModel(
                {
                    phone: body.phone,
                    kind: 'بازدید دوره ای',
                    requester: body.requester,
                    city: body.city,
                    requestdate: requestdate,
                    status:'bazdid',
                    addressid: address._id,
                    zone: body.zone,
                    ostan: body.ostan,
                    address: body.address,
                    teknesiankind: body.teknesiankind,
                    teknesian: body.teknesian,
                    comment: body.comment,
                });
            requestSave.save();
        }
        requestModel.findOneAndUpdate(req.body.requestid,{$set:{status:"factoradded"}}, function (err) {
            if(err)
                console.log(err);

        });
        res.redirect('contracts?message=successedit');

    })
};
