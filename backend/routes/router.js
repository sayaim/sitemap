const client = require("../controllers/client_controller");
const user = require("../controllers/user_controller");
const router = require("express").Router();


router.get("/client/:id", client.select);
router.post("/client/create", client.create);
router.put("/client/edit", client.update);
router.delete("/client/delete/:id", client.delete);

router.post("/user/login", user.login);
router.get("/user/:id", user.select);
router.post("/user/create", user.create);
router.put("/user/edit", user.update);
router.delete("/user/delete/:id", user.delete);

module.exports = router;