const express = require("express");
const router = express.Router();
const {health,register} = require("../controllers/auth.controller");
router.get("/health", health);
router.post("/register",register);

module.exports = router;