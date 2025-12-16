# Mobile Recharge Backend API

A secure backend application for mobile recharge services with CRUD operations, JWT authentication, and role-based authorization.

## Features

- **User Management**: Complete CRUD operations for users
- **Recharge Plan Management**: CRUD operations for recharge plans
- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: bcrypt for password hashing
- **Role-based Authorization**: Admin and User roles
- **Protected Routes**: Middleware for route protection
- **Environment Variables**: Secure configuration management

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- bcryptjs for password hashing
- CORS for cross-origin requests

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mobile_recharge_db
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile (Protected)

### Users (Admin Only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Recharge Plans
- `GET /api/plans` - Get all active plans (Public)
- `GET /api/plans/:id` - Get plan by ID (Public)
- `POST /api/plans` - Create new plan (Admin Only)
- `PUT /api/plans/:id` - Update plan (Admin Only)
- `DELETE /api/plans/:id` - Delete plan (Admin Only)

## Testing with Postman

### 1. Register a User
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123",
  "phoneNumber": "1234567890",
  "role": "user"
}
```

### 2. Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

### 3. Create Recharge Plan (Admin Only)
```
POST http://localhost:5000/api/plans
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "planName": "Unlimited Pack",
  "price": 399,
  "validity": 28,
  "description": "Unlimited calls and data",
  "data": "1.5GB/day",
  "talkTime": "Unlimited",
  "sms": "100/day",
  "operator": "Jio"
}
```

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Role-based access control
- Protected routes middleware
- Environment variables for sensitive data
- Input validation and sanitization

## Project Structure

```
day 12/
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   └── rechargePlanController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── RechargePlan.js
├── routes/
│   ├── auth.js
│   ├── users.js
│   └── plans.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```