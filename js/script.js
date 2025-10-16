document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const dropdownButton = document.getElementById("dropdownButton");
  const logo = document.getElementById("logo");

  function showTab(targetId) {
    tabPanes.forEach(pane => {
      pane.style.display = pane.id === targetId ? "block" : "none";
    });
  }

  function resetDefault() {
    showTab("best-suited");
    dropdownButton.innerHTML = `Best Suited For <span class="arrow"><i class="ri-arrow-down-s-line"></i></span>`;
    dropdownButton.classList.add("active");
    document.querySelectorAll(".nav-link").forEach(l => {
      if (l !== dropdownButton) l.classList.remove("active");
    });
  }

  resetDefault(); 

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("data-target");
      showTab(targetId);

      if (this.classList.contains("dropdown-item")) {
        dropdownButton.innerHTML = `${this.textContent.trim()} <span class="arrow"><i class="ri-arrow-down-s-line"></i></span>`;
        dropdownButton.classList.add("active");
        document.querySelectorAll(".nav-link").forEach(l => {
          if (l !== dropdownButton) l.classList.remove("active");
        });
      } else {
        dropdownButton.classList.remove("active");
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  logo.addEventListener("click", function() {
    resetDefault();
  });
});



// Impact Section JavaScript

// Global variables for sliders
let currentImageIndex = 0;
let currentImageIndex2 = 0;
let currentImageIndex3 = 0;
let currentImageIndex10 = 0;

// Impact slider auto-play
let impactSliderInterval;

// Initialize impact section
function initImpactSection() {
    // Start the main impact slider
    startImpactSlider();
    
    // Initialize tab functionality
    initImpactTabs();
    
    // Initialize individual tab sliders
    initTabSliders();
}

// Main impact slider functionality
function startImpactSlider() {
    const impactSliders = document.querySelectorAll('#impact-slider .impact-slider');
    if (impactSliders.length === 0) return;
    
    let currentImpactIndex = 0;
    
    // Show first image
    impactSliders[0].classList.add('active-slider');
    
    impactSliderInterval = setInterval(() => {
        // Remove active class from current image
        impactSliders[currentImpactIndex].classList.remove('active-slider');
        
        // Move to next image
        currentImpactIndex = (currentImpactIndex + 1) % impactSliders.length;
        
        // Add active class to new image
        impactSliders[currentImpactIndex].classList.add('active-slider');
    }, 3000); // Change image every 3 seconds
}

// Stop impact slider (useful when switching tabs)
function stopImpactSlider() {
    if (impactSliderInterval) {
        clearInterval(impactSliderInterval);
    }
}

// Tab functionality
function initImpactTabs() {
    // Add click event listeners to all "Learn more" buttons
    const learnMoreButtons = document.querySelectorAll('.larne-more-btn');
    learnMoreButtons.forEach(button => {
        if (button.getAttribute('onclick') && button.getAttribute('onclick').includes('showTab')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const tabId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                showTab(tabId);
            });
        }
    });
    
    // Add click event to "Impact Home" buttons
    const impactHomeButtons = document.querySelectorAll('.btn-top-slider');
    impactHomeButtons.forEach(button => {
        if (button.getAttribute('onclick') && button.getAttribute('onclick').includes('showTab')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const tabId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                showTab(tabId);
            });
        }
    });
}

// Show specific tab
function showTab(tabId) {
    // Stop the main impact slider when navigating to detail tabs
    if (tabId !== 'tab1impact') {
        stopImpactSlider();
    } else {
        startImpactSlider();
    }
    
    // Hide all tab contents
    const allTabs = document.querySelectorAll('.tab-impact');
    allTabs.forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
        
        // Scroll to top of the section
        window.scrollTo({
            top: document.getElementById('impact').offsetTop,
            behavior: 'smooth'
        });
        
        // Reset sliders for the active tab
        resetTabSliders(tabId);
    }
}

// Initialize individual tab sliders
function initTabSliders() {
    // Tab 1 slider
    const slides1 = document.querySelectorAll('.slide-impact');
    if (slides1.length > 0) {
        slides1[0].classList.add('active');
        currentImageIndex = 0;
    }
    
    // Tab 2 slider
    const slides2 = document.querySelectorAll('.slide-impact2');
    if (slides2.length > 0) {
        slides2[0].classList.add('active');
        currentImageIndex2 = 0;
    }
    
    // Tab 3 slider
    const slides3 = document.querySelectorAll('.slide-impact3');
    if (slides3.length > 0) {
        slides3[0].classList.add('active');
        currentImageIndex3 = 0;
    }
    
    // Tab 4 slider
    const slides10 = document.querySelectorAll('.slide-impact10');
    if (slides10.length > 0) {
        slides10[0].classList.add('active');
        currentImageIndex10 = 0;
    }
}

// Reset sliders when tab changes
function resetTabSliders(tabId) {
    switch(tabId) {
        case 'tabfirstimpact':
            currentImageIndex = 0;
            const slides1 = document.querySelectorAll('.slide-impact');
            slides1.forEach((slide, index) => {
                slide.classList.toggle('active', index === 0);
            });
            break;
        case 'tab2impact':
            currentImageIndex2 = 0;
            const slides2 = document.querySelectorAll('.slide-impact2');
            slides2.forEach((slide, index) => {
                slide.classList.toggle('active', index === 0);
            });
            break;
        case 'tab3impact':
            currentImageIndex3 = 0;
            const slides3 = document.querySelectorAll('.slide-impact3');
            slides3.forEach((slide, index) => {
                slide.classList.toggle('active', index === 0);
            });
            break;
        case 'tab4impact':
            currentImageIndex10 = 0;
            const slides10 = document.querySelectorAll('.slide-impact10');
            slides10.forEach((slide, index) => {
                slide.classList.toggle('active', index === 0);
            });
            break;
    }
}

// Tab 1 slider functions
function nextImage() {
    const slides = document.querySelectorAll('.slide-impact');
    if (slides.length === 0) return;
    
    slides[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % slides.length;
    slides[currentImageIndex].classList.add('active');
}

function prevImage() {
    const slides = document.querySelectorAll('.slide-impact');
    if (slides.length === 0) return;
    
    slides[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
    slides[currentImageIndex].classList.add('active');
}

// Tab 2 slider functions
function nextImage2() {
    const slides = document.querySelectorAll('.slide-impact2');
    if (slides.length === 0) return;
    
    slides[currentImageIndex2].classList.remove('active');
    currentImageIndex2 = (currentImageIndex2 + 1) % slides.length;
    slides[currentImageIndex2].classList.add('active');
}

function prevImage2() {
    const slides = document.querySelectorAll('.slide-impact2');
    if (slides.length === 0) return;
    
    slides[currentImageIndex2].classList.remove('active');
    currentImageIndex2 = (currentImageIndex2 - 1 + slides.length) % slides.length;
    slides[currentImageIndex2].classList.add('active');
}

// Tab 3 slider functions
function nextImage3() {
    const slides = document.querySelectorAll('.slide-impact3');
    if (slides.length === 0) return;
    
    slides[currentImageIndex3].classList.remove('active');
    currentImageIndex3 = (currentImageIndex3 + 1) % slides.length;
    slides[currentImageIndex3].classList.add('active');
}

function prevImage3() {
    const slides = document.querySelectorAll('.slide-impact3');
    if (slides.length === 0) return;
    
    slides[currentImageIndex3].classList.remove('active');
    currentImageIndex3 = (currentImageIndex3 - 1 + slides.length) % slides.length;
    slides[currentImageIndex3].classList.add('active');
}

// Tab 4 slider functions
function nextImage10() {
    const slides = document.querySelectorAll('.slide-impact10');
    if (slides.length === 0) return;
    
    slides[currentImageIndex10].classList.remove('active');
    currentImageIndex10 = (currentImageIndex10 + 1) % slides.length;
    slides[currentImageIndex10].classList.add('active');
}

function prevImage10() {
    const slides = document.querySelectorAll('.slide-impact10');
    if (slides.length === 0) return;
    
    slides[currentImageIndex10].classList.remove('active');
    currentImageIndex10 = (currentImageIndex10 - 1 + slides.length) % slides.length;
    slides[currentImageIndex10].classList.add('active');
}

// Keyboard navigation for sliders
function handleKeyPress(event) {
    const activeTab = document.querySelector('.tab-impact[style*="display: block"]');
    if (!activeTab) return;
    
    const tabId = activeTab.id;
    
    switch(event.key) {
        case 'ArrowLeft':
            if (tabId === 'tabfirstimpact') prevImage();
            else if (tabId === 'tab2impact') prevImage2();
            else if (tabId === 'tab3impact') prevImage3();
            else if (tabId === 'tab4impact') prevImage10();
            break;
        case 'ArrowRight':
            if (tabId === 'tabfirstimpact') nextImage();
            else if (tabId === 'tab2impact') nextImage2();
            else if (tabId === 'tab3impact') nextImage3();
            else if (tabId === 'tab4impact') nextImage10();
            break;
    }
}

// Touch/swipe support for mobile
function initTouchSupport() {
    const sliders = document.querySelectorAll('.slider-box-container');
    
    sliders.forEach(slider => {
        let startX = 0;
        let endX = 0;
        
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe(startX, endX, slider);
        });
    });
}

function handleSwipe(startX, endX, slider) {
    const swipeThreshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold) {
        const activeTab = document.querySelector('.tab-impact[style*="display: block"]');
        if (!activeTab) return;
        
        const tabId = activeTab.id;
        
        if (diff > 0) {
            // Swipe left - next image
            if (tabId === 'tabfirstimpact') nextImage();
            else if (tabId === 'tab2impact') nextImage2();
            else if (tabId === 'tab3impact') nextImage3();
            else if (tabId === 'tab4impact') nextImage10();
        } else {
            // Swipe right - previous image
            if (tabId === 'tabfirstimpact') prevImage();
            else if (tabId === 'tab2impact') prevImage2();
            else if (tabId === 'tab3impact') prevImage3();
            else if (tabId === 'tab4impact') prevImage10();
        }
    }
}

// Video controls for student testimonials
function initVideoControls() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initImpactSection();
    initTouchSupport();
    initVideoControls();
    initSmoothScroll();
    
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyPress);
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        stopImpactSlider();
    });
});

// Utility function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Lazy loading for images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.impact-slider, .slide-impact, .slide-impact2, .slide-impact3, .slide-impact10');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src') || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Export functions for global access (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initImpactSection,
        showTab,
        nextImage,
        prevImage,
        nextImage2,
        prevImage2,
        nextImage3,
        prevImage3,
        nextImage10,
        prevImage10
    };
}
