# Mobile Recharge App - Day 7 Assignment

## Features Implemented

### 1. Tailwind CSS Integration
- Complete styling with Tailwind CSS
- Responsive design for mobile and desktop
- Dark/Light theme support
- Custom color palette (primary, secondary, accent)

### 2. React State Management (useState)
- Form handling in RechargeForm component
- Theme toggle functionality
- Mobile menu toggle in Navigation
- Notification panel visibility control
- Operator selection state

### 3. Props Usage
- Dynamic component rendering based on props
- Data passing between parent and child components
- Conditional rendering with props (showDetails, showBalance)
- Event handlers passed as props (onRecharge, onTabChange, onSelect)

### 4. Context API Implementation
- Global state management with AppContext
- Theme management (light/dark mode)
- User information storage
- Balance tracking
- Transaction history
- Notification system

### 5. Component Structure
```
src/
├── components/
│   ├── AppContext.js       # Global state management
│   ├── Header.js           # App header with theme toggle
│   ├── Navigation.js       # Responsive navigation
│   ├── RechargeForm.js     # Main recharge form
│   ├── TransactionCard.js  # Transaction display
│   ├── OperatorCard.js     # Operator selection
│   └── NotificationPanel.js # Notification system
├── App.js                  # Main app component
├── index.js               # App entry point
└── index.css              # Tailwind CSS imports
```

## Key React Concepts Demonstrated

1. **useState Hooks**: Form inputs, toggles, visibility states
2. **Props**: Data and event handler passing
3. **Context API**: Global state sharing across components
4. **Conditional Rendering**: Based on state and props
5. **Event Handling**: Form submissions, button clicks
6. **Component Composition**: Reusable, modular components

## Installation & Setup

```bash
npm install
npm start
```

## Technologies Used
- React 18
- Tailwind CSS 3
- Context API
- React Hooks (useState, useContext, useReducer, useEffect)