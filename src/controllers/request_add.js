/*
کنترل شماره همراه یا قرارداد
دریافت اطلاعات آدرسی و نام فرد بر اساس شماره قرارداد
غیرفعال کردن فیلد نام و آدرس بر اساس انتخاب
ثبت مشرتی در صورت عدم
انتخاب تکنسین اتوکامپلیت
بستن آدرس سایر در صورت ورود شماره قرارداد


 */
Teknesian = require('../model/teknesian');
Address = require('../model/address');
requestModel = require('../model/request');
exports.get =async (req, res) => {
    var body=req.query;
    await Teknesian.find({}).then(async function (teknesian) {

        if (req.query.shid)
            await requestModel.findOne({_id: req.query.shid}).then(async function (res3) {
                if (typeof res3 !== 'undefined')
                    res.render('requests/request_add', {
                        teknesian:teknesian,
                        sherkat: res3,
                        csrfToken: req.csrfToken(),
                        activePage: {isAuthenticated: req.isAuthenticated(), user_add: true, title: 'افزودن درخواست'}
                    });
                else
                    res.render('requests/request_add', {
                        teknesian:teknesian,
                        csrfToken: req.csrfToken(),
                        activePage: {isAuthenticated: req.isAuthenticated(), user_add: true, title: 'افزودن درخواست'}
                    });

            });
        else
            res.render('requests/request_add', {
                teknesian:teknesian,
                csrfToken: req.csrfToken(),
                activePage: {isAuthenticated: req.isAuthenticated(), user_add: true, title: 'افزودن درخواست'}
            });
    });
};

exports.post = async (req, res) => {
    var body = req.body;
    body.status='bazdid';
    var addressid;
    if(req.body.sabtkind==="register"){
      if(body.addressid==="0")
      {
          var addressSave = new Address(
              {
                  phone: body.phone,
                  city: body.city,
                  zone: body.zone,
                  ostan: body.ostan,
                  address: body.address,
              });
          addressSave.save(async function (err,address) {
              if(err) {
                  await Teknesian.find({}).then(async function (teknesian) {
                      res.render("requests/request_add", {
                          teknesian:teknesian,
                          message: {
                              kind: "alert-danger",
                              content: "خطایی در ثبت رخ داده است."
                          },
                          csrfToken: req.csrfToken(),
                          activePage: {
                              isAuthenticated: req.isAuthenticated(),
                              request_add: true,
                              title: 'ثبت  درخواست'
                          }
                      });
                      return;
                  });
              }
              var requestSave = new requestModel(
                  {
                      phone: body.phone,
                      kind: body.kind,
                      requester: body.requester,
                      city: body.city,
                      ostan: body.ostan,
                      requestdate: body.requestdate,
                      status:'bazdid',
                      addressid: address._id,
                      zone: body.zone,
                      address: body.address,
                      teknesiankind: body.teknesiankind,
                      teknesian: body.teknesian,
                      comment: body.comment,
                  });
              requestSave.save(async function (err) {
                  if(err)
                      await Teknesian.find({}).then(async function (teknesian) {

                      res.render("requests/request_add", {
                          teknesian:teknesian,
                          message:{
                              kind:"alert-danger",
                              content:"خطایی در ثبت رخ داده است."
                          },
                          csrfToken: req.csrfToken(),
                          activePage: {
                              isAuthenticated:req.isAuthenticated(),
                              request_add: true,
                              title:'ثبت  درخواست'
                          }
                      });});
                  res.redirect('request_list?message=successadd');
              });
      });}
      else
      {
          var requestSave = new requestModel(body);
          requestSave.save(async function (err) {
                    if(err)
                        await Teknesian.find({}).then(async function (teknesian) {

                  res.render("requests/request_add", {
                      teknesian:teknesian,
                            message:{
                                kind:"alert-danger",
                                content:"خطایی در ثبت رخ داده است."
                            },
                            csrfToken: req.csrfToken(),
                            activePage: {
                                isAuthenticated:req.isAuthenticated(),
                                request_add: true,
                                title:'ثبت  درخواست'
                            }
                        });});
                    res.redirect('request_list?message=successadd');
        });}}
    else if(req.body.sabtkind==="update")
    {
        var addressid;
        var requestsave=                  {
            phone: req.body.phone,
            kind: req.body.kind,
            requester: req.body.requester,
            requestdate: req.body.requestdate,
            city: req.body.city,
            ostan: req.body.ostan,
            addressid: req.body.addressid,
            zone: req.body.zone,
            address: req.body.address,
            teknesiankind: req.body.teknesiankind,
            teknesian: req.body.teknesian,
            comment: req.body.comment,
        }
        if(body.addressid==="0")
        {
            var addressSave = new Address(
                {
                    phone: body.phone,
                    city: body.city,
                    ostan: body.ostan,
                    zone: body.zone,
                    ostan: body.ostan,
                    address: body.address,
                });
            addressSave.save((async function (err,addressids) {
                if(err)
                    await Teknesian.find({}).then(async function (teknesian) {

                        res.render("requests/request_add", {
                            teknesian:teknesian,
                            message:{
                                kind:"alert-danger",
                                content:"خطایی در ثبت رخ داده است."
                            },
                            csrfToken: req.csrfToken(),
                            activePage: {
                                isAuthenticated:req.isAuthenticated(),
                                request_add: true,
                                title:'ثبت  درخواست'
                            }
                        });});
                requestsave.addressid=addressids._id;
                        requestModel.findOneAndUpdate({_id:req.body.id},requestsave, function (err) {
                            if (err)
                                console.log(err);
                            res.redirect('request_list?message=successedit');
                        });
            }));}
        else
            requestModel.findOneAndUpdate({_id:req.body.id},requestsave, function (err) {
            if (err)
                console.log(err);
            res.redirect('request_list?message=successedit');

        })
    }


};
