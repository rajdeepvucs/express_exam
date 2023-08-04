const db = require('../models'); // Import the 'db' object containing the Sequelize instance and models

const Product = db.products; // Get the 'Product' model from the 'db' object
const createProduct = async (req, res) => {
    try {
      const { productName, Description, price } = req.body;
  
      // Check if required properties are present in the request body
      if (!productName || !Description || !price) {
        return res.status(400).json({ error: 'Missing required data' });
      }
  
      // Create a new product in the database
      const newProduct = await Product.create({
        productName,
        Description,
        price,
      });
  
      res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Failed to create product' });
    }
  };
  
  
const getAllProducts = async (req, res) => {
    try {
      // Retrieve all products from the database
      const products = await Product.findAll({
        attributes:[
            'productName',   
            'price'
        ]
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  };
  const getProductById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Retrieve a product by its ID from the database
     // const product = await Product.findByPk(id);
     const product = await Product.findOne({where:{id:id}});
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  };
  const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const { productName, Description, price } = req.body;
  
      // Find the product by its ID and update it in the database
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      product.productName = productName;
      product.Description = Description;
      product.price = price;
      await product.save();
     //const product= await Product.update(req.body, {where:{id :id}});
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  };
  const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the product by its ID and delete it from the database
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      await product.destroy();
  
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  };
  module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
  };  