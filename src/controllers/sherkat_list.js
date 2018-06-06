var Sherkat = require("../model/sherkatha");
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
    await Sherkat.find({}).then(async function (res2) {
        if (res2.length>0)
            if (res2.length<=10)
            recordmessage="نمایش 1 تا "+res2.length+" رکورد";
        else
                recordmessage="نمایش 1 تا 10 رکورد از "+res2.length+" رکورد";

        res.render('sherkat_list', {
            sherkatlist:res2,
            message: {kind: message, content: content},
            csrfToken: req.csrfToken(),
            recordmessage:recordmessage,
            activePage: {isAuthenticated: req.isAuthenticated(), sherkat_list: true, title: 'لیست شرکتهای همکار'}
        });
    });
    };
