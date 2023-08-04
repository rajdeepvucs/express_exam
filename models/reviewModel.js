module.exports = (sequelize, DataTypes) => {

    // Define a model using the Sequelize instance
    const Review = sequelize.define('review', {
      // Model attributes
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Description: {
        type: DataTypes.TEXT
      },
     
    });
  
    return Review; // Return the Review model
  };
  