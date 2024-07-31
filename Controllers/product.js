const fs = require("fs");
// const jsonData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const products = jsonData.products;
// !Now we don't need json data
const model = require("../Models/product");
const Product = model.Product;

exports.create = (req, res) => {
  // products.push(req.body)

  const product = new Product(req.body);

  product
    .save()
    .then((doc) => {
      console.log(doc);
      res.status(201).json(product);
    })
    .catch((err) => res.status(400).json(err));
};

exports.getAll = async (req, res) => {
  const Products = await Product.find();
  res.status(200).json(Products);
};

exports.getSingle = async (req, res) => {
  // const id = Number(req.params.id);
  const id = req.params.id;

  try {
    const matchedProduct = await Product.findById(id);
    res.status(200).json(matchedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const ReplacedProduct = await Product.findOneAndReplace(
      { _id: { $eq: id } },
      req.body,
      { new: true }
    );
    res.status(202).json(ReplacedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const UpdatedProduct = await Product.findOneAndUpdate(
      { _id: { $eq: id } },
      req.body,
      { new: true }
    );
    res.status(202).json(UpdatedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.remove = async (req, res) => {
  const id = req.params.id;
  try {
    const DeletedProduct = await Product.findOneAndDelete(
      { _id: { $eq: id } }
    );
    res.status(200).json(DeletedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};
