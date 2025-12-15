# Mobile Recharge App - Day 9 Assignment

## Features Implemented

### 1. Form Validation with React Hook Form & Yup
- **React Hook Form**: Efficient form state management and validation
- **Yup**: Schema-based validation with comprehensive rules
- **@hookform/resolvers**: Integration between React Hook Form and Yup

### 2. Validation Schemas
Located in `src/schemas/validationSchemas.js`:

#### Login Schema
- Email: Required, valid email format
- Password: Required, minimum 6 characters

#### Signup Schema
- Name: Required, 2-50 characters
- Email: Required, valid email format
- Phone: Optional, exactly 10 digits
- Password: Required, minimum 8 characters, must contain uppercase, lowercase, and number
- Confirm Password: Required, must match password

#### Recharge Schema
- Phone Number: Required, exactly 10 digits
- Operator: Required selection
- Amount: Required, between ₹10-₹5000
- Payment Method: Required selection

### 3. Enhanced Form Pages

#### Login Page (`src/pages/Login.jsx`)
- Email and password validation
- Real-time error messages
- Form submission handling
- Loading states during submission
- Form reset after successful login

#### Signup Page (`src/pages/Signup.jsx`)
- Comprehensive field validation
- Password strength requirements
- Confirm password matching
- Phone number format validation
- Terms and conditions checkbox

#### Recharge Page (`src/pages/Recharge.jsx`)
- Mobile number validation
- Operator selection
- Amount validation with min/max limits
- Quick amount buttons
- Payment method selection
- Real-time recharge summary
- Form reset after successful recharge

### 4. Form Features Implemented

#### React Hook Form Integration
- `useForm` hook with yupResolver
- `register()` for input field registration
- `handleSubmit()` for form submission
- `formState.errors` for error handling
- `reset()` for form clearing
- `watch()` for real-time value monitoring

#### Error Handling
- Field-level error messages
- Visual error indicators (red borders)
- User-friendly error text
- Real-time validation feedback

#### UI/UX Enhancements
- Loading states with disabled buttons
- Form submission feedback
- Clean Tailwind CSS styling
- Responsive design
- Accessibility considerations

### 5. Project Structure
```
src/
├── schemas/
│   └── validationSchemas.js    # Yup validation schemas
├── pages/
│   ├── Login.jsx              # Login form with validation
│   ├── Signup.jsx             # Signup form with validation
│   ├── Recharge.jsx           # Recharge form with validation
│   └── Home.jsx               # Landing page
├── components/
│   └── Navbar.jsx             # Navigation component
├── context/
│   └── AuthContext.jsx        # Authentication context
├── App.jsx                    # Main app with routing
└── main.jsx                   # Entry point
```

## Key Validation Rules

### Email Validation
- Valid email format required
- Real-time format checking

### Password Validation
- Minimum 8 characters for signup
- Must contain uppercase, lowercase, and number
- Password confirmation matching

### Phone Number Validation
- Exactly 10 digits required
- Numeric input only

### Amount Validation
- Minimum ₹10, Maximum ₹5000
- Numeric input validation

## Installation & Setup

```bash
npm install
npm start
```

## Technologies Used
- React 18
- React Hook Form 7.43.0
- Yup 1.0.0
- @hookform/resolvers 2.9.11
- React Router DOM 6.8.0
- Tailwind CSS 3
- Context API

## Form Validation Benefits
- **Performance**: Minimal re-renders with React Hook Form
- **User Experience**: Real-time validation feedback
- **Developer Experience**: Clean, maintainable validation logic
- **Type Safety**: Schema-based validation with Yup
- **Accessibility**: Proper error messaging and form states