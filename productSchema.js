const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type:String
    },
    SKU:{
      type:String
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category' // References the 'Category' collection
    },
    inventory_reference_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Inventory' // References the 'Inventory' collection
    },
    discount_reference_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discount' // References the 'Discount' collection
    },
    price: {
      type: Number,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    },
    deleted_at: {
      type: Date,
      default: null
    }
  });
  
  // Update the 'updated_at' field before saving the document
  productSchema.pre('save', function(next) {
    this.updated_at = new Date();
    next();
  });
  
  // Set the 'deleted_at' field when removing a document
  productSchema.pre('remove', function(next) {
    this.deleted_at = new Date();
    next();
  });
  
  const Product = mongoose.model('Product', productSchema);
  // Export models
module.exports = { Category, Product };