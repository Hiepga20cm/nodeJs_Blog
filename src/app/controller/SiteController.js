const Course = require('../model/Course')
const { mutipleMongooseToObject } = require('../../ultill/mongooes')
class SiteController {

    //[get] /
    home(req, res, next) {

        // Course.find({}, function (err, course) {
        //     if (!err) {
        //         res.json(course);
        //     } else {
        //         next(err);// next dùng để đẩy lỗi ra một midle để xử lý lỗi ở một chỗ 
        //     }
        // });
        //res.render('home');

        Course.find({})
            .then(course => {
                res.render('home', { course: mutipleMongooseToObject(course) });
            })
            .catch(next);
    }

    // [get] /search
    search(req, res) {
        res.render('search');
    }
}


module.exports = new SiteController;