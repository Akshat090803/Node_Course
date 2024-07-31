const express = require("express");
const router=express.Router()
const productController=require('../Controllers/product.js')


router
  .post("/", productController.create)
  .get("/", productController.getAll)
  .get("/:id",productController. getSingle)
  .put("/:id", productController.replace)
  .patch("/:id", productController.update)
  .delete("/:id", productController.remove);



  exports.router=router