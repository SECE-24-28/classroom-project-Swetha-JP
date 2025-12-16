const RechargePlan = require('../models/RechargePlan');

// @desc    Get all recharge plans
// @route   GET /api/plans
// @access  Public
const getPlans = async (req, res) => {
  try {
    const plans = await RechargePlan.find({ isActive: true });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get plan by ID
// @route   GET /api/plans/:id
// @access  Public
const getPlanById = async (req, res) => {
  try {
    const plan = await RechargePlan.findById(req.params.id);
    
    if (plan) {
      res.json(plan);
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new recharge plan
// @route   POST /api/plans
// @access  Private/Admin
const createPlan = async (req, res) => {
  try {
    const {
      planName,
      price,
      validity,
      description,
      data,
      talkTime,
      sms,
      operator
    } = req.body;

    const plan = new RechargePlan({
      planName,
      price,
      validity,
      description,
      data,
      talkTime,
      sms,
      operator
    });

    const createdPlan = await plan.save();
    res.status(201).json(createdPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update recharge plan
// @route   PUT /api/plans/:id
// @access  Private/Admin
const updatePlan = async (req, res) => {
  try {
    const plan = await RechargePlan.findById(req.params.id);

    if (plan) {
      plan.planName = req.body.planName || plan.planName;
      plan.price = req.body.price || plan.price;
      plan.validity = req.body.validity || plan.validity;
      plan.description = req.body.description || plan.description;
      plan.data = req.body.data || plan.data;
      plan.talkTime = req.body.talkTime || plan.talkTime;
      plan.sms = req.body.sms || plan.sms;
      plan.operator = req.body.operator || plan.operator;
      plan.isActive = req.body.isActive !== undefined ? req.body.isActive : plan.isActive;

      const updatedPlan = await plan.save();
      res.json(updatedPlan);
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete recharge plan
// @route   DELETE /api/plans/:id
// @access  Private/Admin
const deletePlan = async (req, res) => {
  try {
    const plan = await RechargePlan.findById(req.params.id);

    if (plan) {
      await RechargePlan.findByIdAndDelete(req.params.id);
      res.json({ message: 'Plan removed' });
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan,
};