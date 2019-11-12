const express = require("express");
const router = express.Router();

const { subscriber } = require("../controllers/subscriber");

router.post("/add-subscriber", subscriber);

module.exports = router;
