const express = require('express')
const router = express.Router()
const { home, news, action } = require('../controllers/goals')

router.get('/', home)
router.get('/news', news)
router.get('/action', action)

module.exports = router