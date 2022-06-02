const Course = require('../model/Course')
const { mongooseToObject } = require('../../ultill/mongooes')
class CourseController {


    // [get] /show
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })//fideOne(key: nội dung trong key)
            .then((course) => {
                res.render('course/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
}


module.exports = new CourseController;