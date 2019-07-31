const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll({limit: 10})
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})
