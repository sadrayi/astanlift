const app = require('./app');
http = require('http'),

http.createServer(app).listen(3000);
