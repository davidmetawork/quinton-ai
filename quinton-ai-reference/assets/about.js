// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeLeadershipCards();
    initializeSmoothScrolling();
    initializeAnimations();
});

// Initialize leadership card interactions
function initializeLeadershipCards() {
    const leaderCards = document.querySelectorAll('.leader-card');
    
    leaderCards.forEach(card => {
        // Add click event for mobile devices
        card.addEventListener('click', function() {
            toggleCard(this);
        });
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard(this);
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
        
        // Add touch support for mobile
        let touchStartTime = 0;
        card.addEventListener('touchstart', function() {
            touchStartTime = Date.now();
        });
        
        card.addEventListener('touchend', function(e) {
            const touchDuration = Date.now() - touchStartTime;
            if (touchDuration < 500) { // Quick tap
                e.preventDefault();
                toggleCard(this);
            }
        });
    });
}

// Toggle card flip state
function toggleCard(card) {
    const cardInner = card.querySelector('.card-inner');
    const isFlipped = card.classList.contains('flipped');
    
    // Remove flipped state from all other cards
    document.querySelectorAll('.leader-card').forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('flipped');
            const otherInner = otherCard.querySelector('.card-inner');
            if (otherInner) {
                otherInner.style.transform = '';
            }
        }
    });
    
    // Toggle current card
    if (isFlipped) {
        card.classList.remove('flipped');
        cardInner.style.transform = '';
    } else {
        card.classList.add('flipped');
        cardInner.style.transform = 'rotateY(180deg)';
    }
}

// Initialize smooth scrolling for internal links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize scroll-based animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for stat cards
                if (entry.target.classList.contains('stat-card')) {
                    animateStatNumber(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.stat-card, .feature-item, .leader-card, .roadmap-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Animate stat numbers counting up
function animateStatNumber(statCard) {
    const statNumber = statCard.querySelector('.stat-number');
    if (!statNumber || statNumber.classList.contains('animated')) return;
    
    const finalNumber = statNumber.textContent;
    const numericValue = parseInt(finalNumber.replace(/[^\d]/g, ''));
    
    if (isNaN(numericValue)) return;
    
    statNumber.classList.add('animated');
    
    let currentNumber = 0;
    const increment = Math.ceil(numericValue / 50);
    const duration = 1500; // 1.5 seconds
    const stepTime = duration / (numericValue / increment);
    
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= numericValue) {
            currentNumber = numericValue;
            clearInterval(timer);
        }
        
        // Format the number with appropriate suffix
        let displayNumber = currentNumber.toString();
        if (finalNumber.includes('%')) {
            displayNumber += '%';
        } else if (finalNumber.includes('M')) {
            displayNumber = (currentNumber / 1000000).toFixed(1) + 'M';
        } else if (finalNumber.includes('K')) {
            displayNumber = (currentNumber / 1000).toFixed(0) + 'K';
        } else if (finalNumber.includes('+')) {
            displayNumber += '+';
        }
        
        statNumber.textContent = displayNumber;
    }, stepTime);
}

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Reset any flipped cards on resize
    const flippedCards = document.querySelectorAll('.leader-card.flipped');
    flippedCards.forEach(card => {
        card.classList.remove('flipped');
        const cardInner = card.querySelector('.card-inner');
        if (cardInner) {
            cardInner.style.transform = '';
        }
    });
});

// Close flipped cards when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.leader-card')) {
        const flippedCards = document.querySelectorAll('.leader-card.flipped');
        flippedCards.forEach(card => {
            card.classList.remove('flipped');
            const cardInner = card.querySelector('.card-inner');
            if (cardInner) {
                cardInner.style.transform = '';
            }
        });
    }
});

// Keyboard navigation for leadership cards
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close all flipped cards on Escape
        const flippedCards = document.querySelectorAll('.leader-card.flipped');
        flippedCards.forEach(card => {
            card.classList.remove('flipped');
            const cardInner = card.querySelector('.card-inner');
            if (cardInner) {
                cardInner.style.transform = '';
            }
        });
    }
    
    // Arrow key navigation between cards
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const focusedCard = document.activeElement;
        if (focusedCard && focusedCard.classList.contains('leader-card')) {
            const cards = Array.from(document.querySelectorAll('.leader-card'));
            const currentIndex = cards.indexOf(focusedCard);
            
            let nextIndex;
            if (e.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
            } else {
                nextIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
            }
            
            cards[nextIndex].focus();
            e.preventDefault();
        }
    }
}); 