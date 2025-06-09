const Product = require('../models/product');

//create product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = await Product.create({ name, price, quantity });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//get all created products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//get specific product by id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ error: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//update specific product by id
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, quantity },
      { new: true }
    );
    if (product) res.json(product);
    else res.status(404).json({ error: 'Product not found' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//delete specific product by id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) res.json({ message: 'Product deleted' });
    else res.status(404).json({ error: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
