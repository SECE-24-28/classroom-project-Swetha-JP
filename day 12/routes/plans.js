const express = require('express');
const router = express.Router();
const {
  getPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan,
} = require('../controllers/rechargePlanController');
const { protect, admin } = require('../middleware/auth');

router.route('/')
  .get(getPlans)
  .post(protect, admin, createPlan);

router.route('/:id')
  .get(getPlanById)
  .put(protect, admin, updatePlan)
  .delete(protect, admin, deletePlan);

module.exports = router;