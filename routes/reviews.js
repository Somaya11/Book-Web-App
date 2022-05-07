const express = require('express')
const router = express.Router()

const reviewsCtrl = require('../controllers/reviews')

// POST /movies/:id/review
router.post('/:id', reviewsCtrl.create)

module.exports = router
