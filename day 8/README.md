# Mobile Recharge App - Day 8 Assignment

## Features Implemented

### 1. React Router v6 Setup
- Client-side routing with BrowserRouter
- Route configuration for all pages
- Navigation with Link components
- Programmatic navigation with useNavigate

### 2. Pages Created
- **LandingPage.jsx**: Hero section, features, featured plans, CTA sections
- **Login.jsx**: Email/password form with authentication
- **Signup.jsx**: Registration form with validation
- **RechargePlans.jsx**: Plan listing with filtering and sorting

### 3. Components Structure
```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with auth state
│   ├── Footer.jsx          # Company footer
│   └── PlanCard.jsx        # Reusable plan display
├── pages/
│   ├── LandingPage.jsx     # Home page
│   ├── Login.jsx           # Authentication
│   ├── Signup.jsx          # Registration
│   └── RechargePlans.jsx   # Plans listing
├── context/
│   └── AuthContext.jsx     # Authentication state
├── App.jsx                 # Main app with routing
└── main.jsx               # Entry point
```

### 4. Authentication Context
- Global authentication state management
- Login/logout functionality
- User data storage
- Protected navigation states

### 5. Navigation Features
- Responsive navbar with mobile support
- Dynamic navigation based on auth state
- Hover effects and transitions
- Conditional rendering (Login/Logout buttons)

### 6. Routing Implementation
- Home route (`/`)
- Login route (`/login`)
- Signup route (`/signup`)
- Plans route (`/plans`)
- Smooth navigation between pages

## Key React Concepts Used

1. **React Router v6**: BrowserRouter, Routes, Route, Link, useNavigate
2. **Context API**: Authentication state management
3. **useState**: Form handling and component state
4. **Conditional Rendering**: Auth-based UI changes
5. **Component Composition**: Reusable components
6. **Props**: Data passing between components

## Installation & Setup

```bash
npm install
npm start
```

## Technologies Used
- React 18
- React Router DOM v6
- Tailwind CSS 3
- Context API
- React Hooks

## Features Highlights
- Responsive design for all screen sizes
- Form validation and error handling
- Smooth page transitions
- Authentication flow
- Plan filtering and sorting
- Modern UI with Tailwind CSS