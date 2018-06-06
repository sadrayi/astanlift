var merge = require('merge'),
    exist = require(__dirname + '/../custom_modules/module-exist');
const express = require('express');
const path = require('path');
//const app = express.Router();
module.exports = function (app, passport, Account) {
// import home route controller
    const home = require('./home');
    const fruits = require('./fruits');
    const user = require('./user');
    const teknesian = require('./sherkat_list');
    const teknesian2 = require('./teknesian2');
    const operator = require('./operator');
    const invoice_list = require('./invoice_list');
    const teknesian_detail = require('./teknesian_detail');
    const sale_request = require('./sale_request');
    const calendar = require('./calendar');
    const user_add = require('./user_add');
    const teknesian_add = require('./teknesian_add');
    const invoice_detail = require('./invoice_detail');
    const operator_add = require('./operator_add');
    const contract_detail = require('./contract_detail');
    const category_list = require('./category_list');
    const singleFruit = require('./singlefruit');
    const product_add = require('./product_add');
    const contracts = require('./contracts');
    const contract_add = require('./contract_add');
    const sherkat_add = require('./sherkat_add');
    const product_detail = require('./product_detail');
    const pricing_table = require('./pricing_table');
    const request_list = require('./request_list');
    const product_category = require('./product_category');
    const request_add = require('./request_add');
    const product_list = require('./product_list');
    const request_view = require('./request_view');
    const factor_add = require('./factor_add');
    const error = require('./error');

    app.post('/register', function(req, res) {
        Account.register(
            new Account(
                {
                    username: req.body.fullname,
                    email: req.body.email
                }
            ),
            req.body.password,
            function(err) {
                if (err) {
                    console.log('error while user register!', err);
                    return next(err);
                }
                console.log('user registered!');
                res.redirect('back');
            }
        );
    });

    app.post('/account', passport.authenticate('local',{successRedirect: '/',
        failureRedirect: '/login'}), function(req, res) {
        if (!req.body.remember){
            /* Each session has a unique cookie object accompany it. This allows
            us to alter the session cookie per visitor. We can set
            req.session.cookie.expires to false to enable the cookie to remain
            for only the duration of the user-agent. This user should log in
            again after restarting the browser. */
            req.session.cookie.expires = false;
        }
        res.redirect('back');
    });
// add home route
    app.get('/', home.get);
    app.get('/user', user.get);
    app.get('/product_add', product_add.get);
    app.get('/pricing_table', pricing_table.get);
    app.get('/sherkat_list', teknesian.get);
    app.get('/sherkat_add', sherkat_add.get);
    app.post('/sherkat_add', sherkat_add.save);
    app.get('/product_category', product_category.get);
    app.get('/category_list', category_list.get);
    app.get('/product_detail', product_detail.get);
    app.get('/request_list', request_list.get);
    app.get('/periodic_requests', request_list.priodic);
    app.get('/request_view', request_view.get);
    app.get('/request_add', request_add.get);
    app.get('/product_list', product_list.get);
    app.get('/factor_add', factor_add.get);
    app.get('/invoice_detail', invoice_detail.get);
    app.get('/invoice_list', invoice_list.get);
    app.get('/teknesian2', teknesian2.get);
    app.get('/contract_add', contract_add.get);
    app.get('/sale_request', sale_request.get);
    app.get('/contracts', contracts.get);
    app.get('/operator', operator.get);
    app.get('/contract_view', contract_add.view);
    app.get('/contract_detail', contract_detail.get);
    app.get('/calendar', calendar.get);
    app.get('/teknesian_detail', teknesian_detail.get);
    app.get('/user_add', user_add.get);
    app.get('/teknesian_add', teknesian_add.get);
    app.get('/operator_add', operator_add.get);
    app.get('/fruits', fruits.get);
    app.get('/fruits/:singleFruit', singleFruit.get);
    app.use(error.client);
    app.use(error.server);
    app.get('/logout', function(req, res) {
        req.logout();
        req.session.destroy();
        res.redirect('back');
    });
}
