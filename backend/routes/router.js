const client = require("../controllers/client_controller");
const admin = require("../controllers/admin_controller");
const member = require("../controllers/member_controller");
const router = require("express").Router();


router.get("/admin/edit/:id", admin.edit);
router.post("/admin/create", admin.create);
router.put("/admin/edit", admin.update);
router.delete("/admin/delete/:id", admin.delete);

router.get("/client/edit/:id", client.edit);
router.post("/client/create", client.create);
router.put("/client/edit", client.update);
router.delete("/client/delete/:id", client.delete);

router.get("/member/edit/:id", member.edit);
router.post("/member/create", member.create);
router.put("/member/edit", member.update);
router.delete("/member/delete/:id", member.delete);

module.exports = router;