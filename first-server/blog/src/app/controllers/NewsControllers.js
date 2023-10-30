class NewsController {
    // [GET news
    index(req, res) {
        res.render('news');
    }

    show(req, res, next) {
        res.send('New Details!!!!!!!');
    }
}

module.exports = new NewsController();
