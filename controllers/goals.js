

const home = (req, res) => {
    res.render('index')
}

const news = (req, res) => {
    res.render('news')
}

const action = (req, res) => {
    res.render('action')
}

module.exports = { home, news, action }