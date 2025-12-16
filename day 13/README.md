# Mobile Recharge Frontend

A React frontend application that integrates with the Mobile Recharge Backend API, featuring JWT authentication, protected routes, and dynamic data display.

## Features

- **Frontend & Backend Integration**: Complete API integration with axios
- **JWT Authentication**: Login/signup with token-based authentication
- **Protected Routes**: Route protection for authenticated users
- **Dynamic Data Display**: Fetch and display recharge plans from backend
- **Responsive Design**: Mobile-first responsive UI with Tailwind CSS
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Loading indicators for better UX

## Tech Stack

- React 18
- React Router DOM
- Axios for API calls
- Tailwind CSS for styling
- Context API for state management

## Prerequisites

Make sure the backend server (day 12) is running on `http://localhost:5000`

## Installation

1. Navigate to the project directory:
   ```bash
   cd "day 13"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── api/
│   └── axios.js              # API configuration and calls
├── components/
│   ├── Navbar.jsx            # Navigation with auth state
│   ├── PlanCard.jsx          # Recharge plan display
│   ├── LoadingSpinner.jsx    # Loading indicator
│   └── ErrorMessage.jsx      # Error display
├── context/
│   └── AuthContext.jsx       # Authentication state management
├── pages/
│   ├── Home.jsx              # Landing page
│   ├── Login.jsx             # Login form
│   ├── Signup.jsx            # Registration form
│   └── Plans.jsx             # Recharge plans (protected)
├── routes/
│   └── ProtectedRoute.jsx    # Route protection component
├── App.jsx                   # Main app component
└── index.js                  # Entry point
```

## API Integration

### Authentication Flow
1. **Signup**: Register new user → Redirect to login
2. **Login**: Authenticate → Store JWT token → Redirect to plans
3. **Auto-login**: Check stored token on app load
4. **Logout**: Clear token and user data

### Protected Routes
- `/plans` - Requires authentication
- Automatic redirect to login for unauthenticated users

### API Endpoints Used
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `GET /api/plans` - Fetch recharge plans

## Features Implemented

### 1. API Configuration ✅
- Centralized axios instance with base URL
- Automatic JWT token attachment
- Response interceptors for error handling

### 2. Authentication Integration ✅
- Login page connects to backend `/auth/login`
- Signup page connects to backend `/auth/register`
- JWT token stored in localStorage
- User data stored in Context

### 3. AuthContext Enhancement ✅
- Stores token, user, and authentication state
- Provides login(), register(), logout() functions
- Auto-loads authentication state on refresh

### 4. Protected Routes ✅
- ProtectedRoute component restricts access
- Redirects unauthenticated users to login
- Loading state during auth check

### 5. Dynamic Plans Display ✅
- Fetches plans from backend API
- Displays plans using PlanCard component
- Operator filtering functionality
- Loading and error states

### 6. Error Handling ✅
- Loading indicators during API calls
- Error messages for failed requests
- Success messages for successful actions
- Automatic logout on token expiration

## Testing the Integration

1. **Start Backend**: Ensure day 12 backend is running on port 5000
2. **Start Frontend**: Run `npm start` to start on port 3000
3. **Test Flow**:
   - Visit homepage
   - Sign up for new account
   - Login with credentials
   - View protected plans page
   - Test logout functionality
   - Refresh page to verify auth persistence

## Environment Variables

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Integration Checklist

- ✅ Frontend connects to backend APIs
- ✅ Authentication flow working end-to-end
- ✅ JWT tokens handled properly
- ✅ Protected routes secured
- ✅ Recharge plans loaded from database
- ✅ Error handling and user feedback
- ✅ Responsive design
- ✅ Clean and scalable architecture