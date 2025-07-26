// Yashvi Kothari Portfolio - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initContactForm();
    initScrollEffects();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle - Fixed functionality
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked'); // Debug log
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') && !navbar.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Smooth scrolling for navigation links - Enhanced
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after navigation
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Update active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Typing animation for hero section
function initTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const phrases = [
        'Cloud Security Engineer',
        'DevOps Engineer',
        'AWS Community Builder',
        'Security Analyst',
        'Infrastructure Specialist',
        'DevSecOps Engineer'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function typeText() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isPaused) {
            setTimeout(typeText, 1000);
            isPaused = false;
            return;
        }

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentPhrase.length) {
                isPaused = true;
                isDeleting = true;
            }
        }

        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeText, typingSpeed);
    }

    typeText();
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .cert-card, .project-card, .blog-card, .hobby-card');
    
    // Add fade-in class to elements
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Add loading animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
        section.classList.add('loading');
    });
}

// Contact form handling - Fixed functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Contact form submitted'); // Debug log
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validate form
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Create mailto link with proper encoding
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Hi Yashvi,

I found your portfolio website and would like to get in touch.

Name: ${name}
Email: ${email}

Message:
${message}

Best regards,
${name}`);
        
        const mailtoLink = `mailto:yashvikothari@outlook.com?subject=${subject}&body=${body}`;
        
        setTimeout(() => {
            try {
                // Try to open email client
                const link = document.createElement('a');
                link.href = mailtoLink;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Reset form and show success message
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                showNotification('Thank you for your message! Your email client should open with the pre-filled message. If not, please email me directly at yashvikothari@outlook.com', 'success');
            } catch (error) {
                console.error('Email client failed to open:', error);
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Fallback: copy email to clipboard and show instructions
                copyToClipboard(`${name} (${email}) sent: ${message}`);
                showNotification(`Email client couldn't open automatically. Please email me directly at yashvikothari@outlook.com. Your message has been copied to clipboard.`, 'info');
            }
        }, 1000);
    });
}

// Copy to clipboard function
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
        }
        document.body.removeChild(textArea);
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close notification">&times;</button>
        </div>
    `;

    // Add notification styles
    const notificationStyles = {
        position: 'fixed',
        top: '90px',
        right: '20px',
        left: '20px',
        maxWidth: '500px',
        margin: '0 auto',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-base)',
        padding: 'var(--space-16)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '1001',
        animation: 'slideInFromTop 0.3s ease-out',
        fontSize: 'var(--font-size-sm)',
        lineHeight: 'var(--line-height-normal)'
    };

    Object.assign(notification.style, notificationStyles);

    // Add type-specific styling
    if (type === 'success') {
        notification.style.borderColor = 'var(--color-success)';
        notification.style.backgroundColor = 'rgba(var(--color-success-rgb), 0.1)';
    } else if (type === 'error') {
        notification.style.borderColor = 'var(--color-error)';
        notification.style.backgroundColor = 'rgba(var(--color-error-rgb), 0.1)';
    } else if (type === 'info') {
        notification.style.borderColor = 'var(--color-info)';
        notification.style.backgroundColor = 'rgba(var(--color-info-rgb), 0.1)';
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Close functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutToTop 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 8 seconds for long messages
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutToTop 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 8000);

    // Add animation styles if not already added
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideInFromTop {
                from {
                    transform: translateY(-100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutToTop {
                from {
                    transform: translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateY(-100%);
                    opacity: 0;
                }
            }
            .notification-content {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: var(--space-12);
            }
            .notification-message {
                flex: 1;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: var(--font-size-xl);
                cursor: pointer;
                color: var(--color-text-secondary);
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                margin-top: -2px;
            }
            .notification-close:hover {
                color: var(--color-text);
            }
            @media (max-width: 768px) {
                .notification {
                    right: 10px !important;
                    left: 10px !important;
                    max-width: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Scroll effects for navbar
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Utility function for smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in:not(.visible)');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('visible');
        }
    });
}

// Add scroll event listener for reveal animations
window.addEventListener('scroll', revealOnScroll);

// Initialize reveal animations on load
window.addEventListener('load', revealOnScroll);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    revealOnScroll();
    
    // Update navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);