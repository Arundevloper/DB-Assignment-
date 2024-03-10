const mongoose = require('mongoose');

// Define the category schema
const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    deleted_at: {
      type: Date,
      default: null
    }
  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
  

  // Define a pre hook to set the deleted_at field when a document is deleted
  categorySchema.pre('remove', function(next) {
    this.deleted_at = new Date();
    next();
  });


// Create models from schemas
const Category = mongoose.model('Category', categorySchema);


// Export models
module.exports = { Category, Product };
