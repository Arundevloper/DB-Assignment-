const mongoose = require('mongoose');

const discountProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  discount_percent: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
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
discountProductSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

// Set the 'deleted_at' field when removing a document
discountProductSchema.pre('remove', function(next) {
  this.deleted_at = new Date();
  next();
});

module.exports = mongoose.model('DiscountProduct', discountProductSchema);
