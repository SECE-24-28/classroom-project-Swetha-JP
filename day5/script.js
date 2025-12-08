
let currentPlans = [];

async function loadPlans(planType) {
    const container = document.getElementById('plans-container');
    if (!container) return;
    container.innerHTML = '<div class="col-span-3 text-center text-gray-600">Loading plans...</div>';

    try {
        const result = await MockAPI.getPlans('', planType); // operator can be empty for now
        if (result.success) {
            currentPlans = result.plans;
            container.innerHTML = '';
            result.plans.forEach(plan => {
                const planCard = document.createElement('div');
                planCard.className = 'bg-white bg-opacity-50 rounded-lg p-6 text-center cursor-pointer hover:bg-opacity-70 transition-all border-2 border-transparent hover:border-purple-400';
                planCard.innerHTML = `
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">₹${plan.amount}</h3>
                    <p class="text-gray-600 mb-4">${plan.validity}</p>
                    <ul class="text-left text-gray-700 mb-4 space-y-1">
                        ${plan.benefits.map(benefit => `<li>• ${benefit}</li>`).join('')}
                    </ul>
                    <input type="radio" name="selected-plan" value="${plan.id}" class="w-4 h-4 text-purple-600" required>
                `;
                container.appendChild(planCard);
            });
        } else {
            container.innerHTML = '<div class="col-span-3 text-center text-red-600">Failed to load plans</div>';
        }
    } catch (error) {
        console.error('Error loading plans:', error);
        container.innerHTML = '<div class="col-span-3 text-center text-red-600">Error loading plans</div>';
    }
}

// Plans page
if (document.getElementById('plans-container')) {
    (async () => {
        await loadPlans('topup');
    })();
    document.querySelectorAll('input[name="plan-type"]').forEach(radio => {
        radio.addEventListener('change', async (e) => {
            await loadPlans(e.target.value);
        });
    });

    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const mobile = document.getElementById('mobile').value;
        const operator = document.getElementById('operator').value;
        const selectedPlanInput = document.querySelector('input[name="selected-plan"]:checked');

        if (!selectedPlanInput) {
            alert('Please select a plan');
            return;
        }

        const selectedPlan = currentPlans.find(plan => plan.id == selectedPlanInput.value);
        if (!selectedPlan) {
            alert('Selected plan not found');
            return;
        }

        const result = await MockAPI.processRecharge(mobile, operator, selectedPlan.id, selectedPlan.amount);
        alert(`${result.message}\nTransaction ID: ${result.transaction.transactionId}`);
    });
}

// Login page
if (document.getElementById('email') && document.getElementById('password') && window.location.pathname.includes('index.html')) {
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const result = await MockAPI.login(email, password);
            alert(`${result.message}\nWelcome, ${result.user.name}!`);
            window.location.href = 'recharge.html';
        } catch (error) {
            alert(error.message);
        }
    });
}

// Register page
if (window.location.pathname.includes('register.html')) {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const phone = document.getElementById('phone').value;

            try {
                const result = await MockAPI.register(name, email, password, phone);
                alert(`${result.message}\nWelcome, ${result.user.name}!`);
                window.location.href = 'index.html';
            } catch (error) {
                alert(error.message);
            }
        });
    }
}
