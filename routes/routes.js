module.exports = app => {
  const memo = require("../controllers/controller.js");
  var router = require("express").Router();

  router.post("/", memo.create);

  router.get("/", memo.findAll);

  router.get("/:id", memo.findOne);

  router.put("/:id", memo.update);

  router.delete("/:id", memo.delete);
  
  app.use('/api/memo', router);
};