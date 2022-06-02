const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path')
const route = require('./router');
const db = require('./config/db');

// conect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));// sử dụng file tĩnh

app.use(morgan('combined'));

const handlebars = require('express-handlebars');

app.engine('hbs', handlebars.engine(
    { extname: '.hbs' }
));//cái này dùng để cấu hình đuôi handlebas

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));


//route
route(app);

app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})