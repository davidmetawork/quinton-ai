// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing functionality...');
    
    // Initialize all functionality
    initScrollAnimations();
    initMobileMenu();
    initAudioPlayer();
    initSmoothScrolling();
    initHeaderScroll();
    initBenefitsScroll();
    initIntersectionObserver();
    initButtonClicks();
    
    console.log('All functionality initialized');
});

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.worker-card, .feature-card, .testimonial, .step, .capability-card, .benefit-card, .position-card, .article-card, .partnership-card');
    
    if (animatedElements.length === 0) {
        console.log('No animated elements found');
        return;
    }
    
    console.log(`Found ${animatedElements.length} elements to animate`);
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (!mobileToggle || !nav) {
        console.log('Mobile menu elements not found');
        return;
    }
    
    console.log('Mobile menu initialized');
    
    mobileToggle.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Mobile menu toggle clicked');
        nav.classList.toggle('mobile-active');
        mobileToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('mobile-active');
            mobileToggle.classList.remove('active');
        });
    });
}

// Audio Player
function initAudioPlayer() {
    const playButtons = document.querySelectorAll('.play-button');
    
    if (playButtons.length === 0) {
        console.log('No audio players found');
        return;
    }
    
    console.log(`Found ${playButtons.length} audio players`);
    
    playButtons.forEach(playButton => {
        const audioPlayer = playButton.closest('.audio-player');
        const waveBars = audioPlayer ? audioPlayer.querySelectorAll('.wave-bar') : [];
        let isPlaying = false;

        playButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Audio player clicked');
            
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                waveBars.forEach(bar => {
                    bar.style.animationPlayState = 'running';
                });
                
                // Simulate audio playback for 30 seconds
                setTimeout(() => {
                    if (isPlaying) {
                        playButton.innerHTML = '<i class="fas fa-play"></i>';
                        waveBars.forEach(bar => {
                            bar.style.animationPlayState = 'paused';
                        });
                        isPlaying = false;
                    }
                }, 30000);
            } else {
                playButton.innerHTML = '<i class="fas fa-play"></i>';
                waveBars.forEach(bar => {
                    bar.style.animationPlayState = 'paused';
                });
            }
        });
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    if (navLinks.length === 0) {
        console.log('No anchor links found');
        return;
    }
    
    console.log(`Found ${navLinks.length} anchor links`);
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (!header) {
        console.log('Header not found');
        return;
    }
    
    console.log('Header scroll effect initialized');
    
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Benefits Scroll Animation
function initBenefitsScroll() {
    const benefitsTrack = document.querySelector('.benefits-track');
    
    if (!benefitsTrack) {
        console.log('Benefits track not found');
        return;
    }
    
    console.log('Benefits scroll initialized');
    
    // Duplicate benefits for seamless loop
    const benefits = benefitsTrack.innerHTML;
    benefitsTrack.innerHTML = benefits + benefits;
}

// Intersection Observer for Advanced Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    // Animate floating cards
    const floatingCards = document.querySelectorAll('.card');
    if (floatingCards.length > 0) {
        console.log(`Found ${floatingCards.length} floating cards`);
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        floatingCards.forEach(card => {
            card.style.animationPlayState = 'paused';
            cardObserver.observe(card);
        });
    }

    // Animate statistics counter
    const statNumbers = document.querySelectorAll('.stat-number, .result-number');
    if (statNumbers.length > 0) {
        console.log(`Found ${statNumbers.length} stat numbers`);
        
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const text = entry.target.textContent;
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    if (number > 0) {
                        animateCounter(entry.target, number, text);
                    }
                }
            });
        }, observerOptions);

        statNumbers.forEach(stat => statObserver.observe(stat));
    }
}

// Counter Animation
function animateCounter(element, target, originalText) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
            element.textContent = originalText; // Restore original formatting
        } else {
            if (originalText.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else if (originalText.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else if (originalText.includes('/')) {
                element.textContent = originalText; // Keep original for complex formats
            } else {
                element.textContent = Math.floor(current);
            }
        }
    }, 20);
}

// Button Click Animations and Handlers
function initButtonClicks() {
    console.log('Button click handlers initialized');
    
    document.addEventListener('click', (e) => {
        const button = e.target.closest('button') || (e.target.tagName === 'BUTTON' ? e.target : null);
        
        if (button) {
            console.log('Button clicked:', button.className);
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);

            // Handle specific button types
            if (button.classList.contains('cta-button') || 
                button.classList.contains('hero-cta') || 
                button.classList.contains('section-cta') ||
                button.classList.contains('worker-cta') ||
                button.classList.contains('pricing-cta') ||
                button.classList.contains('apply-btn') ||
                button.classList.contains('partnership-cta')) {
                
                e.preventDefault();
                showNotification('Demo request submitted! We\'ll be in touch soon.');
            }
            
            // Handle demo buttons
            if (button.classList.contains('hero-demo') || 
                button.classList.contains('section-cta-secondary')) {
                
                e.preventDefault();
                showNotification('Demo video will be available soon!');
            }
            
            // Handle filter tabs
            if (button.classList.contains('filter-tab')) {
                e.preventDefault();
                const allTabs = document.querySelectorAll('.filter-tab');
                allTabs.forEach(tab => tab.classList.remove('active'));
                button.classList.add('active');
                
                // Filter functionality would go here
                console.log('Filter applied:', button.textContent);
            }
        }
    });
}

// Notification System
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);

    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-cards');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Form Validation (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Lazy Loading for Images (if images are added)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const nav = document.querySelector('.nav');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (nav && nav.classList.contains('mobile-active')) {
            nav.classList.remove('mobile-active');
            mobileToggle.classList.remove('active');
        }
    }
});

// Performance Optimization
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

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    // Additional scroll-based animations can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Console welcome message
console.log(`
🚀 Welcome to Quinton AI AI Replica
Built with modern web technologies
- Responsive Design
- Smooth Animations
- Interactive Elements
- Performance Optimized

Visit the original: https://Quinton AI.ai
`);

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initScrollAnimations,
        initMobileMenu,
        initAudioPlayer,
        showNotification,
        validateEmail
    };
} 