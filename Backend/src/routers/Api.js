const express = require("express");
const updates = require("../sirvices/URLsirvices");
const router = express.Router()
router.put('/EditUser/:id', updates)
module.exports = router;