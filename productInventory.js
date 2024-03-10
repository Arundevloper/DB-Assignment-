const mongoose = require('mongoose');

const productInventorySchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // References the 'Product' collection
        required: true
    },
    quantity: {
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

// Pre-save hook to update the 'updated_at' field before saving the document
productInventorySchema.pre('save', function(next) {
    this.updated_at = new Date();
    next();
});

// Pre-remove hook to set the 'deleted_at' field when removing a document
productInventorySchema.pre('remove', function(next) {
    this.deleted_at = new Date();
    next();
});

module.exports = mongoose.model('ProductInventory', productInventorySchema);
