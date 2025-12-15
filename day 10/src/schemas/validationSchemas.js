import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

export const signupSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .optional(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password')
});

export const rechargeSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  operator: yup
    .string()
    .required('Please select an operator'),
  amount: yup
    .number()
    .min(10, 'Minimum recharge amount is ₹10')
    .max(5000, 'Maximum recharge amount is ₹5000')
    .required('Amount is required'),
  paymentMethod: yup
    .string()
    .required('Please select a payment method')
});