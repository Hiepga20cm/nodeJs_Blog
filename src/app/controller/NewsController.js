class NewsController {

    //[get] /new
    index(req, res) {
        res.render('new');
    }

    // [get] /new/:slug
    show(req, res) {
        res.send('New detail');
    }
}


module.exports = new NewsController;