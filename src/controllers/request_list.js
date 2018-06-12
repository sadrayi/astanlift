var requestModel = require("../model/request");
var contractModel = require("../model/contract");
exports.get =async (req, res) => {
    switch (req.query.message)
    {
        case "successadd":
            var message = "alert-success";
            var content = "ثبت نام با موفقیت انجام شد.";
            break;
        case "successedit":
            var message = "alert-success";
            var content = "شرکت با موفقیت ویرایش شد.";
            break;
    }
    await requestModel.find({}).then(async function (res2) {
        for(i=0;i<res2.length;i++)
        await contractModel.find({phone:res2[i].phone,contractenddate:{
                $gte: new Date()
    }}).then(async function (eshterakstatus) {
    if(eshterakstatus.length>0)
        res2[i].eshterakstatus="1";
    else
        res2[i].eshterakstatus="0";

        });
        res.render('./requests/request_list.html', {
            sherkatlist:res2,
            message: {kind: message, content: content},
            csrfToken: req.csrfToken(),
            activePage: {isAuthenticated: req.isAuthenticated(), sherkat_list: true, title: 'لیست درخواست ها '}
        });
    });
};

exports.priodic = (req, res) => {
    res.render('requests/request_list', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), priodic_list: true , title:'لیست درخواست ها عقد قرارداد'} });
};
