const router = require("express").Router();
const { postUser, checkLogin } = require("../controller/userController");

router.post("/signup", postUser);
router.post("/login", checkLogin);

module.exports = router;
