// Mock API for RechargeApp
const MockAPI = {
    users: [
        { id: 1, email: 'user@example.com', password: 'password123', name: 'John Doe', phone: '9876543210' }
    ],
    transactions: [],

    login: async (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = MockAPI.users.find(u => u.email === email && u.password === password);
                if (user) {
                    resolve({ success: true, message: 'Login successful', user: { id: user.id, email: user.email, name: user.name } });
                } else {
                    reject({ success: false, message: 'Invalid credentials' });
                }
            }, 1000);
        });
    },

    register: async (name, email, password, phone) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exists = MockAPI.users.find(u => u.email === email);
                if (exists) {
                    reject({ success: false, message: 'Email already registered' });
                } else {
                    const newUser = { id: MockAPI.users.length + 1, email, password, name, phone };
                    MockAPI.users.push(newUser);
                    resolve({ success: true, message: 'Registration successful', user: { id: newUser.id, email: newUser.email, name: newUser.name } });
                }
            }, 1000);
        });
    },

    getPlans: async (operator, planType) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const plans = {
                    topup: [
                        { id: 1, amount: 10, validity: '7 Days', benefits: ['Talktime: ₹10'] },
                        { id: 2, amount: 20, validity: '14 Days', benefits: ['Talktime: ₹20'] },
                        { id: 3, amount: 30, validity: '21 Days', benefits: ['Talktime: ₹30'] },
                        { id: 4, amount: 50, validity: '28 Days', benefits: ['Talktime: ₹50'] },
                        { id: 5, amount: 75, validity: '28 Days', benefits: ['Talktime: ₹75'] },
                        { id: 6, amount: 100, validity: '28 Days', benefits: ['Talktime: ₹100'] },
                        { id: 7, amount: 150, validity: '56 Days', benefits: ['Talktime: ₹150'] },
                        { id: 8, amount: 200, validity: '56 Days', benefits: ['Talktime: ₹200'] },
                        { id: 9, amount: 300, validity: '84 Days', benefits: ['Talktime: ₹300'] },
                        { id: 10, amount: 500, validity: '84 Days', benefits: ['Talktime: ₹500'] },
                        { id: 11, amount: 750, validity: '120 Days', benefits: ['Talktime: ₹750'] },
                        { id: 12, amount: 1000, validity: '180 Days', benefits: ['Talktime: ₹1000'] },
                        { id: 13, amount: 1500, validity: '180 Days', benefits: ['Talktime: ₹1500'] },
                        { id: 14, amount: 2000, validity: '365 Days', benefits: ['Talktime: ₹2000'] },
                        { id: 15, amount: 3000, validity: '365 Days', benefits: ['Talktime: ₹3000'] }
                    ],
                    data: [
                        { id: 16, amount: 49, validity: '7 Days', benefits: ['500MB Daily', 'Unlimited Calls'] },
                        { id: 17, amount: 79, validity: '14 Days', benefits: ['1GB Daily', 'Unlimited Calls'] },
                        { id: 18, amount: 99, validity: '14 Days', benefits: ['1.5GB Daily', 'Unlimited Calls'] },
                        { id: 19, amount: 149, validity: '21 Days', benefits: ['2GB Daily', 'Unlimited Calls'] },
                        { id: 20, amount: 199, validity: '28 Days', benefits: ['2GB Daily', 'Unlimited Calls'] },
                        { id: 21, amount: 239, validity: '28 Days', benefits: ['2.5GB Daily', 'Unlimited Calls'] },
                        { id: 22, amount: 299, validity: '28 Days', benefits: ['3GB Daily', 'Unlimited Calls'] },
                        { id: 23, amount: 359, validity: '56 Days', benefits: ['2.5GB Daily', 'Unlimited Calls'] },
                        { id: 24, amount: 449, validity: '56 Days', benefits: ['3GB Daily', 'Unlimited Calls'] },
                        { id: 25, amount: 549, validity: '84 Days', benefits: ['2GB Daily', 'Unlimited Calls'] },
                        { id: 26, amount: 666, validity: '84 Days', benefits: ['3GB Daily', 'Unlimited Calls'] },
                        { id: 27, amount: 719, validity: '84 Days', benefits: ['4GB Daily', 'Unlimited Calls'] },
                        { id: 28, amount: 839, validity: '84 Days', benefits: ['5GB Daily', 'Unlimited Calls'] },
                        { id: 29, amount: 999, validity: '120 Days', benefits: ['3GB Daily', 'Unlimited Calls'] },
                        { id: 30, amount: 1499, validity: '365 Days', benefits: ['2GB Daily', 'Unlimited Calls'] }
                    ],
                    combo: [
                        { id: 31, amount: 149, validity: '14 Days', benefits: ['1GB Daily', 'Unlimited Calls', 'Disney+ Hotstar'] },
                        { id: 32, amount: 181, validity: '28 Days', benefits: ['1GB Daily', 'Unlimited Calls', 'Sony Liv'] },
                        { id: 33, amount: 239, validity: '28 Days', benefits: ['1.5GB Daily', 'Unlimited Calls', 'Zee5'] },
                        { id: 34, amount: 299, validity: '28 Days', benefits: ['2GB Daily', 'Unlimited Calls', 'Amazon Prime'] },
                        { id: 35, amount: 359, validity: '28 Days', benefits: ['2.5GB Daily', 'Unlimited Calls', 'Netflix Basic'] },
                        { id: 36, amount: 449, validity: '56 Days', benefits: ['2GB Daily', 'Unlimited Calls', 'Disney+ Hotstar'] },
                        { id: 37, amount: 539, validity: '56 Days', benefits: ['2.5GB Daily', 'Unlimited Calls', 'Prime + Hotstar'] },
                        { id: 38, amount: 666, validity: '84 Days', benefits: ['2GB Daily', 'Unlimited Calls', 'All OTT Apps'] },
                        { id: 39, amount: 719, validity: '84 Days', benefits: ['2.5GB Daily', 'Unlimited Calls', 'Premium OTT'] },
                        { id: 40, amount: 839, validity: '84 Days', benefits: ['3GB Daily', 'Unlimited Calls', 'Netflix + Prime'] },
                        { id: 41, amount: 999, validity: '84 Days', benefits: ['4GB Daily', 'Unlimited Calls', 'Complete OTT Pack'] },
                        { id: 42, amount: 1199, validity: '120 Days', benefits: ['3GB Daily', 'Unlimited Calls', 'All Streaming Apps'] },
                        { id: 43, amount: 1499, validity: '180 Days', benefits: ['2.5GB Daily', 'Unlimited Calls', 'Premium Bundle'] },
                        { id: 44, amount: 1799, validity: '365 Days', benefits: ['2GB Daily', 'Unlimited Calls', 'Annual OTT Pack'] },
                        { id: 45, amount: 2999, validity: '365 Days', benefits: ['3GB Daily', 'Unlimited Calls', 'Ultimate Bundle'] }
                    ]
                };
                resolve({ success: true, plans: plans[planType] || plans.topup });
            }, 800);
        });
    },

    processRecharge: async (mobile, operator, planId, amount) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!mobile || mobile.length !== 10) {
                    reject({ success: false, message: 'Invalid mobile number' });
                    return;
                }
                const transaction = {
                    id: MockAPI.transactions.length + 1,
                    mobile,
                    operator,
                    planId,
                    amount,
                    status: 'success',
                    timestamp: new Date().toISOString(),
                    transactionId: 'TXN' + Date.now()
                };
                MockAPI.transactions.push(transaction);
                resolve({ success: true, message: 'Recharge successful', transaction });
            }, 1500);
        });
    },

    getTransactions: async (userId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, transactions: MockAPI.transactions });
            }, 500);
        });
    }
};
