const express = require("express");
const router=express.Router()
const userController=require('../Controllers/users.js')


router
  .post("/", userController.create)
  .get("/", userController.getAll)
  .get("/:id",userController. getSingle)
  .put("/:id", userController.replace)
  .patch("/:id", userController.update)
  .delete("/:id", userController.remove);



  exports.router=router