export const OPERATORS = [
  { id: 1, name: 'Airtel', code: 'AIR', logo: '📶', commission: 2 },
  { id: 2, name: 'Jio', code: 'JIO', logo: '📱', commission: 1.5 },
  { id: 3, name: 'Vi', code: 'VI', logo: '📞', commission: 2.5 },
  { id: 4, name: 'BSNL', code: 'BSNL', logo: '📡', commission: 3 }
];

export const PAYMENT_METHODS = [
  { id: 'wallet', name: 'Wallet', icon: '💳' },
  { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'upi', name: 'UPI', icon: '📱' },
  { id: 'netbanking', name: 'Net Banking', icon: '🏦' }
];

export const QUICK_AMOUNTS = [99, 199, 299, 399, 499, 599, 999, 1499];

export const PLANS = [
  {
    id: 1,
    price: 199,
    type: 'Prepaid',
    validity: '28 days',
    data: '2GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'OTT Benefits'],
    popular: false
  },
  {
    id: 2,
    price: 399,
    type: 'Prepaid',
    validity: '56 days',
    data: '3GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'Netflix Premium', 'Amazon Prime'],
    popular: true
  },
  {
    id: 3,
    price: 599,
    type: 'Prepaid',
    validity: '84 days',
    data: '2GB/day',
    voice: 'Unlimited',
    sms: '100/day',
    benefits: ['Free Roaming', 'Disney+ Hotstar', 'Zee5 Premium'],
    popular: false
  }
];