const res = require('express/lib/response');
const newRouter = require('./new');
//const siteRouter = require('./site');
const siteRouter = require('./site');
const courseRouter = require('./course');

function route(app) {

    app.use('/new', newRouter);
    app.use('/course', courseRouter);
    app.use('/', siteRouter);



}

module.exports = route;
