const express = require("express")
const { login } = require("../controllers/admin")

const router = express.Router()
router.post('/admin',login)

module.exports = router