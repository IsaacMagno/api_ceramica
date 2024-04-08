router = require("express").Router();

const authController = require("../controllers/authControlller");

router.get("/", authController.getAuth);

module.exports = router;
