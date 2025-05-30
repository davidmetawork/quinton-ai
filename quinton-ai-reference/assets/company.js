// Company Page JavaScript - ES Module
// Handles team member bio expand/collapse functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeTeamCards();
});

function initializeTeamCards() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            toggleTeamBio(this);
        });
    });
}

function toggleTeamBio(card) {
    const isExpanded = card.classList.contains('expanded');
    
    // Close all other cards first
    const allCards = document.querySelectorAll('.team-card');
    allCards.forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('expanded');
        }
    });
    
    // Toggle the clicked card
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
        
        // Smooth scroll to keep the card in view
        setTimeout(() => {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 150);
    }
}

// Optional: Close expanded bio when clicking outside
document.addEventListener('click', function(event) {
    const teamSection = document.querySelector('.team-snapshot');
    const clickedCard = event.target.closest('.team-card');
    
    // If click is outside team section or not on a team card, close all bios
    if (teamSection && !teamSection.contains(event.target)) {
        const expandedCards = document.querySelectorAll('.team-card.expanded');
        expandedCards.forEach(card => {
            card.classList.remove('expanded');
        });
    }
});

// Keyboard accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const expandedCards = document.querySelectorAll('.team-card.expanded');
        expandedCards.forEach(card => {
            card.classList.remove('expanded');
        });
    }
});

// Add keyboard navigation for team cards
function addKeyboardNavigation() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach((card, index) => {
        // Make cards focusable
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleTeamBio(this);
            }
            
            // Arrow key navigation
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                event.preventDefault();
                const nextIndex = (index + 1) % teamCards.length;
                teamCards[nextIndex].focus();
            }
            
            if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                event.preventDefault();
                const prevIndex = (index - 1 + teamCards.length) % teamCards.length;
                teamCards[prevIndex].focus();
            }
        });
    });
}

// Initialize keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    addKeyboardNavigation();
});

export { initializeTeamCards, toggleTeamBio }; 