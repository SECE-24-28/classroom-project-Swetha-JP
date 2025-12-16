const mongoose = require('mongoose');

const rechargePlanSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: [true, 'Plan name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [1, 'Price must be greater than 0']
  },
  validity: {
    type: Number,
    required: [true, 'Validity is required'],
    min: [1, 'Validity must be at least 1 day']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  data: {
    type: String,
    required: [true, 'Data allowance is required']
  },
  talkTime: {
    type: String,
    required: [true, 'Talk time is required']
  },
  sms: {
    type: String,
    required: [true, 'SMS count is required']
  },
  operator: {
    type: String,
    required: [true, 'Operator is required'],
    enum: ['Airtel', 'Jio', 'Vi', 'BSNL']
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('RechargePlan', rechargePlanSchema);