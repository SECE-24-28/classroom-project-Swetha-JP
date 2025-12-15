const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['prepaid', 'postpaid', 'dth', 'datacard']
  },
  operator: {
    type: String,
    required: [true, 'Operator is required'],
    enum: ['airtel', 'jio', 'vi', 'bsnl']
  },
  validity: {
    type: Number,
    required: [true, 'Validity is required'],
    min: [1, 'Validity must be at least 1 day']
  },
  data: {
    type: String,
    required: [true, 'Data allowance is required']
  },
  voice: {
    type: String,
    default: 'Unlimited'
  },
  sms: {
    type: String,
    default: '100/day'
  },
  benefits: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  isPopular: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
productSchema.index({ category: 1, operator: 1 });
productSchema.index({ price: 1 });

module.exports = mongoose.model('Product', productSchema);