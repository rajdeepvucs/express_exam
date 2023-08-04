module.exports = (sequelize, DataTypes) => {

    // Define a model using the Sequelize instance
    const Product = sequelize.define('product', {
      // Model attributes
      productName: {
        type: DataTypes.STRING,
        //allowNull: false
      },
      Description: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER
      }
    });
  
    return Product; // Return the Product model
  };
  