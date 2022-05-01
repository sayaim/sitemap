
const memoController = require("../controllers/memoController");
const router = require("express").Router();

router.get("/", memoController.index);
router.get("/edit/:id", memoController.edit);
// router.get("/edit/:id(\\d+)", memoController.edit);
router.post("/create", memoController.store);
router.put("/edit", memoController.update);
// router.post("/edit:id(\\d+)", memoController.update);
router.delete("/delete/:id", memoController.delete);

module.exports = router;