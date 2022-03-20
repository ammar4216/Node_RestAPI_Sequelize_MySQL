const db = require("../models");

const Product = db.products;

// Add Product
const addProduct = async (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }

  //create a product
  let info = {
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc,
    published: req.body.published ? req.body.published : false,
  };

  try {
    const product = await Product.create(info);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while creating the Product",
    });
  }
};

// Get All Product
const getAllProducts = async (req, res) => {
  try {
    let product = await Product.findAll({});
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while getting the Products",
    });
  }
};

// Get Single Product
const getSingleProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findOne({ where: { id: id } });
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || `Error occurred while getting the Product ${id}`,
    });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || `Error occurred while updating the Product ${id}`,
    });
  }
};

// delete Product
const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send("Product is deleted successfully!!");
  } catch (err) {
    res.status(500).send({
      message: err.message || `Error occurred while deleting the Product ${id}`,
    });
  }
};

// get published product
const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
};
