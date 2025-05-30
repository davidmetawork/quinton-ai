// Pricing Page JavaScript

// Pricing data constants
const PRICING_DATA = {
    solo: {
        monthly: 199,
        annual: 149, // Annual pricing shown as monthly equivalent
        features: [
            '600 data credits/month',
            '6 premium email inboxes',
            'AI-powered prospecting',
            'Email automation sequences'
        ]
    },
    team: {
        monthly: 750,
        annual: 650, // Annual pricing shown as monthly equivalent
        baseSeats: 10,
        extraSeatPrice: 0, // No additional cost per seat for team plan
        features: [
            '4,000 data credits/month',
            '30 premium email inboxes',
            'Advanced automation workflows',
            'Team collaboration tools',
            'Priority support'
        ]
    },
    agency: {
        monthly: 'Custom',
        annual: 'Custom',
        baseSeats: 0,
        extraSeatPrice: 0,
        features: [
            'Unlimited data credits',
            'Unlimited email inboxes',
            'Custom integrations',
            'Dedicated account manager',
            'SLA & enterprise support'
        ]
    }
};

// State management
let currentBilling = 'annual'; // Default to annual
let currentSeats = 5;
let currentPlan = 'team';

// DOM elements
let billingToggle, seatSlider, seatDisplay, costEstimate, recommendationText;
let planCards, priceAmounts, annualSavings, extraSeatNotes;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    updatePricing();
    initializeFAQ();
    initializeFeatureMatrix();
});

function initializeElements() {
    // Billing toggle elements
    billingToggle = document.getElementById('billingToggle');
    
    // Seat calculator elements
    seatSlider = document.getElementById('seatSlider');
    seatDisplay = document.getElementById('seatDisplay');
    costEstimate = document.getElementById('costEstimate');
    recommendationText = document.getElementById('recommendationText');
    
    // Plan card elements
    planCards = document.querySelectorAll('.plan-card');
    priceAmounts = document.querySelectorAll('.price-amount');
    annualSavings = document.querySelectorAll('.annual-savings');
    extraSeatNotes = document.querySelectorAll('.extra-seat-note');
}

function setupEventListeners() {
    // Billing toggle
    if (billingToggle) {
        billingToggle.addEventListener('click', toggleBilling);
    }
    
    // Seat slider
    if (seatSlider) {
        seatSlider.addEventListener('input', updateSeatCalculator);
    }
    
    // Plan selection buttons
    document.querySelectorAll('.plan-cta').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const planType = this.closest('.plan-card').dataset.plan;
            selectPlan(planType);
        });
    });
}

function toggleBilling() {
    currentBilling = currentBilling === 'monthly' ? 'annual' : 'monthly';
    billingToggle.classList.toggle('active');
    updatePricing();
    updateSeatCalculator();
}

function updatePricing() {
    // Update plan cards
    planCards.forEach(card => {
        const planType = card.dataset.plan;
        const priceElement = card.querySelector('.price-amount');
        const savingsElement = card.querySelector('.annual-savings');
        const noteElement = card.querySelector('.extra-seat-note');
        
        if (planType && PRICING_DATA[planType]) {
            const planData = PRICING_DATA[planType];
            let price, period;
            
            if (planType === 'agency') {
                // Agency plan always shows custom pricing
                price = 'Custom';
                period = 'pricing';
                
                if (savingsElement) {
                    savingsElement.style.display = 'none';
                }
            } else {
                if (currentBilling === 'annual') {
                    price = planData.annual;
                    period = '/month';
                    
                    // Show savings for annual billing
                    if (savingsElement) {
                        const monthlyCost = planData.monthly;
                        const savings = monthlyCost - planData.annual;
                        const savingsPercent = Math.round((savings / monthlyCost) * 100);
                        
                        savingsElement.innerHTML = `
                            <span class="original-price">$${monthlyCost}/month</span>
                            <span class="save-amount">Save ${savingsPercent}%</span>
                        `;
                        savingsElement.style.display = 'block';
                    }
                } else {
                    price = planData.monthly;
                    period = '/month';
                    
                    // Hide savings for monthly billing
                    if (savingsElement) {
                        savingsElement.style.display = 'none';
                    }
                }
            }
            
            if (priceElement) {
                if (planType === 'agency') {
                    priceElement.innerHTML = `${price}<span class="price-period">${period}</span>`;
                } else {
                    priceElement.innerHTML = `$${price}<span class="price-period">${period}</span>`;
                }
            }
            
            // Update extra seat notes for team plan
            if (noteElement && planType === 'team') {
                if (planData.extraSeatPrice === 0) {
                    noteElement.textContent = `Up to ${planData.baseSeats} seats included - no additional cost`;
                } else {
                    const extraPrice = currentBilling === 'annual' 
                        ? planData.extraSeatPrice * 10 // Annual discount
                        : planData.extraSeatPrice;
                    const extraPeriod = currentBilling === 'annual' ? '/year' : '/month';
                    
                    noteElement.textContent = `Additional seats: $${extraPrice}${extraPeriod} each`;
                }
            }
        }
    });
}

function updateSeatCalculator() {
    if (!seatSlider || !seatDisplay || !costEstimate) return;
    
    currentSeats = parseInt(seatSlider.value);
    seatDisplay.textContent = `${currentSeats} seats`;
    
    // Calculate cost based on current plan
    const planData = PRICING_DATA[currentPlan];
    if (!planData) return;
    
    let totalCost = 0;
    let period = '/month';
    
    if (currentPlan === 'solo') {
        // Solo plan is per seat
        const seatPrice = currentBilling === 'annual' ? planData.annual : planData.monthly;
        totalCost = seatPrice * currentSeats;
    } else if (currentPlan === 'team') {
        // Team plan includes up to 10 seats, no additional cost
        const baseCost = currentBilling === 'annual' ? planData.annual : planData.monthly;
        totalCost = baseCost; // Fixed cost regardless of seats (up to 10)
    } else if (currentPlan === 'agency') {
        // Agency plan is custom pricing
        totalCost = 'Custom';
    }
    
    if (totalCost === 'Custom') {
        costEstimate.innerHTML = `
            <span class="estimate-label">Estimated cost:</span>
            <span class="estimate-amount">Custom pricing</span>
        `;
    } else {
        costEstimate.innerHTML = `
            <span class="estimate-label">Estimated cost:</span>
            <span class="estimate-amount">$${totalCost}${period}</span>
        `;
    }
    
    updateRecommendation();
}

function updateRecommendation() {
    if (!recommendationText) return;
    
    let recommendation = '';
    
    if (currentSeats === 1) {
        recommendation = 'Perfect for individual recruiters - Solo plan recommended';
    } else if (currentSeats <= 10) {
        recommendation = 'Great for growing teams - Team plan includes up to 10 seats';
    } else {
        recommendation = 'For large agencies with 10+ seats - Contact us for custom Agency pricing';
    }
    
    recommendationText.textContent = recommendation;
}

function selectPlan(planType) {
    // Remove active state from all cards
    planCards.forEach(card => card.classList.remove('selected'));
    
    // Add active state to selected card
    const selectedCard = document.querySelector(`[data-plan="${planType}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    // Update current plan
    currentPlan = planType;
    
    // Update seat calculator if applicable
    if (planType === 'solo') {
        // Hide seat calculator for solo plan
        const calculator = document.querySelector('.seat-calculator');
        if (calculator) {
            calculator.style.display = 'none';
        }
    } else {
        // Show seat calculator for team/agency plans
        const calculator = document.querySelector('.seat-calculator');
        if (calculator) {
            calculator.style.display = 'block';
        }
        updateSeatCalculator();
    }
    
    // Simulate plan selection (in real app, this would trigger checkout)
    console.log(`Selected plan: ${planType}, billing: ${currentBilling}, seats: ${currentSeats}`);
}

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

function initializeFeatureMatrix() {
    const expandButton = document.getElementById('expandMatrix');
    const hiddenRows = document.querySelectorAll('.matrix-row.hidden');
    
    if (expandButton) {
        expandButton.addEventListener('click', function() {
            const isExpanded = this.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse matrix
                hiddenRows.forEach(row => {
                    row.style.display = 'none';
                });
                this.classList.remove('expanded');
                this.innerHTML = '<i class="fas fa-chevron-down"></i> Show all features';
            } else {
                // Expand matrix
                hiddenRows.forEach(row => {
                    row.style.display = 'grid';
                });
                this.classList.add('expanded');
                this.innerHTML = '<i class="fas fa-chevron-up"></i> Show fewer features';
            }
        });
    }
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states for CTA buttons
document.querySelectorAll('.plan-cta, .addon-cta, .cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('loading')) {
            e.preventDefault();
            return;
        }
        
        // Add loading state
        this.classList.add('loading');
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        
        // Simulate API call
        setTimeout(() => {
            this.classList.remove('loading');
            this.textContent = originalText;
        }, 2000);
    });
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleBilling,
        updatePricing,
        updateSeatCalculator,
        selectPlan,
        PRICING_DATA
    };
} 