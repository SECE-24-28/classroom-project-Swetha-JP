# Mobile Recharge Backend - Day 11

## Backend Setup with Express.js and MongoDB Using Mongoose

### Project Structure
```
day 11/
├── config/
│   └── database.js          # MongoDB connection configuration
├── models/
│   ├── User.js             # User schema with validation
│   └── Product.js          # Product schema for recharge plans
├── routes/
│   └── users.js            # User API routes
├── controllers/
│   └── userController.js   # User request handling logic
├── server.js               # Main Express server file
├── package.json            # Project dependencies
├── .env                    # Environment variables
└── README.md              # Project documentation
```

### Folder Structure Purpose

- **config/**: Database configuration and connection setup
- **models/**: Mongoose schemas and data models
- **routes/**: API route definitions and endpoints
- **controllers/**: Request handling logic and business operations
- **server.js**: Main application entry point

### Features Implemented

#### 1. Express Server Setup
- ✅ Express.js server running on port 5000
- ✅ JSON middleware for parsing requests
- ✅ Basic route testing (`/` and `/api/test`)
- ✅ Error handling middleware

#### 2. MongoDB Connection
- ✅ Mongoose connection with proper error handling
- ✅ Connection status logging
- ✅ Graceful error handling for connection failures
- ✅ Environment variable configuration

#### 3. Mongoose Schemas
- ✅ **User Model**: Complete user schema with validation
  - Name (required, 2-50 characters)
  - Email (required, unique, valid format)
  - Phone (required, unique, 10 digits)
  - Password (required, min 6 characters)
  - Role (user/admin)
  - Balance, recharges, points tracking

- ✅ **Product Model**: Recharge plans schema
  - Name, description, price (required)
  - Category (prepaid/postpaid/dth/datacard)
  - Operator (airtel/jio/vi/bsnl)
  - Validity, data, voice, SMS details
  - Benefits array and status flags

#### 4. API Routes & Controllers
- ✅ User CRUD operations
- ✅ GET `/api/users` - Get all users
- ✅ GET `/api/users/:id` - Get user by ID
- ✅ POST `/api/users` - Create new user
- ✅ PUT `/api/users/:id` - Update user
- ✅ DELETE `/api/users/:id` - Delete user

### Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   - MongoDB URI: `mongodb://localhost:27017/mobile-recharge`
   - Port: `5000`

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Run Production Server**
   ```bash
   npm start
   ```

### API Testing

#### Test Server Connection
```bash
GET http://localhost:5000/
GET http://localhost:5000/api/test
```

#### Test User API
```bash
# Get all users
GET http://localhost:5000/api/users

# Create user
POST http://localhost:5000/api/users
Content-Type: application/json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "password123"
}
```

### Database Connection Status
- ✅ MongoDB connection established
- ✅ Connection error handling implemented
- ✅ Database name: `mobile-recharge`
- ✅ Connection status logging

### Technologies Used
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **dotenv**: Environment variables
- **nodemon**: Development server

### Expected Outcomes Achieved
- ✅ Express server running successfully on port 5000
- ✅ MongoDB connected using Mongoose with proper logging
- ✅ Proper backend folder structure implemented
- ✅ Basic schemas created and ready for API integration
- ✅ Test routes responding correctly
- ✅ Error handling implemented

### Next Steps
- Add authentication middleware
- Implement transaction models
- Add operator and plan management
- Set up payment processing
- Add real-time features with Socket.io