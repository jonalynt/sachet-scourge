// Global variables for state management
let animatedStats = {
  heroStats: false,
  statusStats: false
};

let modalActionDetails = {
  zerowaste: {
    title: "Support Zero Waste Stores",
    content: `
      <h3>How to Support Zero Waste Initiatives</h3>
      <div class="action-detail-content">
        <div class="detail-section">
          <h4>🏪 Find Zero Waste Stores</h4>
          <ul>
            <li>Search for refill stations in your area</li>
            <li>Visit community markets with bulk options</li>
            <li>Support local businesses offering package-free products</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>💡 Benefits of Zero Waste Shopping</h4>
          <ul>
            <li>Save 201% compared to sachet prices</li>
            <li>Reduce plastic waste significantly</li>
            <li>Support sustainable business models</li>
            <li>Build community connections</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>🎯 Getting Started</h4>
          <ul>
            <li>Bring clean containers to refill stations</li>
            <li>Start with one product category (cleaning supplies)</li>
            <li>Calculate your savings over time</li>
            <li>Share your experience with others</li>
          </ul>
        </div>
      </div>
    `
  },
  segregation: {
    title: "Practice Proper Waste Segregation",
    content: `
      <h3>Waste Segregation Guide</h3>
      <div class="action-detail-content">
        <div class="detail-section">
          <h4>🗂️ Basic Categories</h4>
          <ul>
            <li><strong>Biodegradable:</strong> Food scraps, garden waste</li>
            <li><strong>Recyclable:</strong> Clean plastic, paper, metal, glass</li>
            <li><strong>Non-recyclable:</strong> Mixed materials, contaminated items</li>
            <li><strong>Special waste:</strong> Electronics, batteries, medical waste</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>📦 Sachet-Specific Tips</h4>
          <ul>
            <li>Clean sachets before disposal</li>
            <li>Collect sachets separately for eco-brick programs</li>
            <li>Never burn plastic sachets</li>
            <li>Participate in community collection drives</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>🎯 Implementation Steps</h4>
          <ul>
            <li>Set up separate containers at home</li>
            <li>Label containers clearly</li>
            <li>Educate family members</li>
            <li>Check local collection schedules</li>
          </ul>
        </div>
      </div>
    `
  },
  reusable: {
    title: "Choose Reusable Containers",
    content: `
      <h3>Switching to Reusables</h3>
      <div class="action-detail-content">
        <div class="detail-section">
          <h4>🔄 Reusable Alternatives</h4>
          <ul>
            <li><strong>Glass jars:</strong> For sauces, spices, and condiments</li>
            <li><strong>Stainless steel containers:</strong> For liquids and food storage</li>
            <li><strong>Cloth bags:</strong> For bulk dry goods</li>
            <li><strong>Silicone containers:</strong> For flexible storage needs</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>💰 Cost-Benefit Analysis</h4>
          <ul>
            <li>Initial investment: ₱200-500 for basic set</li>
            <li>Long-term savings: 50-200% vs sachet purchases</li>
            <li>Environmental impact: Prevent 1000+ sachets annually</li>
            <li>Health benefits: Avoid plastic contamination</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>🎯 Transition Strategy</h4>
          <ul>
            <li>Start with one product category</li>
            <li>Gradually expand to more products</li>
            <li>Find reliable refill sources</li>
            <li>Track your progress and savings</li>
          </ul>
        </div>
      </div>
    `
  },
  advocacy: {
    title: "Advocate for Extended Producer Responsibility",
    content: `
      <h3>Extended Producer Responsibility (EPR)</h3>
      <div class="action-detail-content">
        <div class="detail-section">
          <h4>📜 What is EPR?</h4>
          <ul>
            <li>Policy requiring companies to manage product lifecycle</li>
            <li>Includes collection, recycling, and proper disposal</li>
            <li>Shifts responsibility from consumers to producers</li>
            <li>Creates incentives for sustainable packaging design</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>🗳️ How to Advocate</h4>
          <ul>
            <li>Contact your local representatives</li>
            <li>Support environmental organizations</li>
            <li>Participate in public consultations</li>
            <li>Share information on social media</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>🎯 Key Messages</h4>
          <ul>
            <li>Companies should pay for packaging waste management</li>
            <li>EPR creates jobs in recycling industry</li>
            <li>Reduces burden on local government units</li>
            <li>Encourages innovation in sustainable packaging</li>
          </ul>
        </div>
      </div>
    `
  },
  community: {
    title: "Join Community Recycling Programs",
    content: `
      <h3>Community Engagement</h3>
      <div class="action-detail-content">
        <div class="detail-section">
          <h4>🤝 Find Local Programs</h4>
          <ul>
            <li>Contact your barangay environmental office</li>
            <li>Look for NGO-led initiatives</li>
            <li>Join neighborhood Facebook groups</li>
            <li>Visit community centers for information</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>🎯 Program Types</h4>
          <ul>
            <li><strong>Eco-brick making:</strong> Convert sachets to building materials</li>
            <li><strong>Collection drives:</strong> Organize neighborhood cleanup</li>
            <li><strong>Education campaigns:</strong> Teach proper waste management</li>
            <li><strong>Upcycling workshops:</strong> Transform waste into useful items</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>🌟 Benefits</h4>
          <ul>
            <li>Meet like-minded community members</li>
            <li>Learn new skills and techniques</li>
            <li>See direct impact in your neighborhood</li>
            <li>Contribute to local environmental goals</li>
          </ul>
        </div>
      </div>
    `
  },
  education: {
    title: "Educate Others About the Sachet Problem",
    content: `
      <h3>Spreading Awareness</h3>
      <div class="action-detail-content">
        <div class="detail-section">
          <h4>👥 Target Audiences</h4>
          <ul>
            <li><strong>Family and friends:</strong> Start conversations at home</li>
            <li><strong>Workplace colleagues:</strong> Share during lunch breaks</li>
            <li><strong>Social media networks:</strong> Post educational content</li>
            <li><strong>Community groups:</strong> Present at local meetings</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>📊 Key Facts to Share</h4>
          <ul>
            <li>163 million sachets used daily in Philippines</li>
            <li>20% of plastic waste ends up in ocean</li>
            <li>Waste could double by 2040 without action</li>
            <li>Successful alternatives save money and environment</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>🎯 Effective Methods</h4>
          <ul>
            <li>Share this website with others</li>
            <li>Post before/after photos of waste reduction</li>
            <li>Organize educational movie screenings</li>
            <li>Create simple infographics for social media</li>
          </ul>
        </div>
      </div>
    `
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeAnimations();
  initializeScrollEffects();
  initializeCounters();
  initializeMobileMenu();
});

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });
}

// Mobile menu functionality
function initializeMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// Scroll effects for navbar
function initializeScrollEffects() {
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class for styling
    if (scrollTop > 100) {
      navbar.style.background = 'rgba(19, 52, 59, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(19, 52, 59, 0.95)';
      navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
  });
}

// Animation observer for scroll animations
function initializeAnimations() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animateElements.forEach(element => {
    element.classList.add('animate-on-scroll');
    observer.observe(element);
  });
  
  // Add animation classes to key elements
  const sectionHeaders = document.querySelectorAll('.section-header');
  const cards = document.querySelectorAll('.cause-card, .effect-card, .solution-card, .success-card, .action-card');
  
  [...sectionHeaders, ...cards].forEach(element => {
    element.classList.add('animate-on-scroll');
    observer.observe(element);
  });
}

// Counter animations
function initializeCounters() {
  const heroStatsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats.heroStats) {
        animateHeroCounters();
        animatedStats.heroStats = true;
      }
    });
  }, { threshold: 0.5 });
  
  const statusStatsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats.statusStats) {
        animateStatusCounters();
        animatedStats.statusStats = true;
      }
    });
  }, { threshold: 0.3 });
  
  const heroStats = document.querySelector('.hero-stats');
  const statusStats = document.querySelector('.status-stats');
  
  if (heroStats) heroStatsObserver.observe(heroStats);
  if (statusStats) statusStatsObserver.observe(statusStats);
}

function animateHeroCounters() {
  const counters = document.querySelectorAll('.hero-stats .stat-number[data-target]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(function() {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 16);
  });
}

function animateStatusCounters() {
  const counters = document.querySelectorAll('.status-stats .stat-big-number[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2500;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(function() {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      if (target > 1000) {
        counter.textContent = Math.floor(current).toLocaleString();
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 16);
  });
}

// Modal functionality for action details
function showActionDetails(actionType) {
  const modal = document.getElementById('action-modal');
  const modalBody = document.getElementById('modal-body');
  
  if (modalActionDetails[actionType]) {
    modalBody.innerHTML = `
      <div class="action-modal-content">
        <h2>${modalActionDetails[actionType].title}</h2>
        ${modalActionDetails[actionType].content}
        <div class="modal-actions">
          <button class="btn btn--primary" onclick="closeModal()">Get Started</button>
          <button class="btn btn--outline" onclick="closeModal()">Close</button>
        </div>
      </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
}

function closeModal() {
  const modal = document.getElementById('action-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Keyboard navigation for modal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Parallax effect for hero section (subtle)
function initializeParallax() {
  const hero = document.querySelector('.hero');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.3;
    
    if (hero) {
      hero.style.backgroundPosition = `center ${parallax}px`;
    }
  });
}

// Initialize parallax on load
window.addEventListener('load', function() {
  initializeParallax();
});

// Smooth reveal animations for cards
function initializeCardAnimations() {
  const cards = document.querySelectorAll('.cause-card, .solution-card, .success-card, .action-card');
  
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize card animations
document.addEventListener('DOMContentLoaded', function() {
  initializeCardAnimations();
});

// Progress indicator for reading
function initializeProgressIndicator() {
  const progressBar = document.createElement('div');
  progressBar.id = 'reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #21808d, #32b8c6);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = Math.min(scrolled, 100) + '%';
  });
}

// Initialize progress indicator
document.addEventListener('DOMContentLoaded', function() {
  initializeProgressIndicator();
});

// Enhanced hover effects for interactive elements
function initializeEnhancedHovers() {
  const interactiveElements = document.querySelectorAll('.cause-card, .effect-card, .solution-card, .success-card, .action-card');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Initialize enhanced hovers
document.addEventListener('DOMContentLoaded', function() {
  initializeEnhancedHovers();
});

// Utility function to check if user prefers reduced motion
function respectsReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Apply reduced motion preferences
if (respectsReducedMotion()) {
  document.documentElement.style.setProperty('--duration-fast', '0ms');
  document.documentElement.style.setProperty('--duration-normal', '0ms');
  
  // Disable parallax for users who prefer reduced motion
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundAttachment = 'scroll';
  }
}

// Add dynamic content loading for better performance
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    imageObserver.observe(img);
  });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', function() {
  initializeLazyLoading();
});

// Error handling for failed image loads
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      console.warn('Failed to load image:', this.src);
    });
  });
});

// Add smooth transitions for theme changes
function initializeThemeTransitions() {
  const elements = document.querySelectorAll('*');
  
  elements.forEach(element => {
    element.style.transition = 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease';
  });
}

// Initialize theme transitions
document.addEventListener('DOMContentLoaded', function() {
  initializeThemeTransitions();
});

// Performance monitoring
function monitorPerformance() {
  if ('performance' in window) {
    window.addEventListener('load', function() {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log('Page load time:', loadTime + 'ms');
    });
  }
}

// Initialize performance monitoring
monitorPerformance();

// Export functions for potential external use
window.SachetScourge = {
  showActionDetails,
  closeModal,
  animateHeroCounters,
  animateStatusCounters
};