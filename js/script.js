// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hero slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    function showSlide(index) {
        // Ensure index is within bounds (though modulo in callers should handle this)
        if (slides.length === 0) return; // Do nothing if there are no slides
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }

        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Add active class to the current slide
        if (slides[index]) { // Check if the slide exists
            slides[index].classList.add('active');
        }
        
        // Update dots if they exist
        if (dots && dots.length > 0) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            if (dots[index]) { // Check if the specific dot exists
                dots[index].classList.add('active');
            }
        }
        
        currentSlide = index;
    }
    
    // Show the first slide initially
    showSlide(0);
    
    // Auto slide
    setInterval(() => {
        showSlide((currentSlide + 1) % totalSlides);
    }, 5000);
    
    // Next/Prev button click handlers
    nextBtn.addEventListener('click', () => {
        showSlide((currentSlide + 1) % totalSlides);
    });
    
    prevBtn.addEventListener('click', () => {
        showSlide((currentSlide - 1 + totalSlides) % totalSlides);
    });
    
    // Dot click handlers
    if (dots && dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
    }
    
    // Gallery filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to the clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const phone = this.querySelector('input[name="phone"]').value;
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Form submission success
            alert('Thank you for your appointment request! We will contact you shortly.');
            this.reset();
        });
    }
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('sticky');
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.classList.remove('sticky');
            header.style.boxShadow = 'none';
        }
    });
    
    // Mobile menu toggle (for smaller screens)
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        header.appendChild(mobileMenuBtn);
        
        let menuOpen = false;
        
        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            
            if (menuOpen) {
                nav.classList.add('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    };
    
    // Only create mobile menu for smaller screens
    if (window.innerWidth < 768) {
        createMobileMenu();
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (nav && mobileMenuBtn && !nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            document.querySelector('nav').classList.remove('active');
        }
    });
});

// Newsletter subscribe interactivity
function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('.newsletter-input');
    const animation = form.querySelector('.newsletter-animation');
    const email = input.value.trim();
    if (!email) return false;

    // Clear previous animation
    animation.innerHTML = '';

    // Confetti animation
    for (let i = 1; i <= 5; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        animation.appendChild(confetti);
    }
    // Checkmark animation
    const check = document.createElement('span');
    check.className = 'checkmark';
    check.innerHTML = '<i class="fas fa-check-circle"></i> Subscribed!';
    animation.appendChild(check);

    // Clear input
    input.value = '';
    input.blur();
    // Remove animation after 1.5s
    setTimeout(() => { animation.innerHTML = ''; }, 1500);
    return false;
}

// YouTube video thumbnail click handler
function loadVideo(thumbnailElement) {
    const videoContainer = thumbnailElement.closest('.video-container');
    const videoFrame = videoContainer.querySelector('.video-frame');
    const iframe = videoFrame.querySelector('iframe');
    const videoThumbnail = videoContainer.querySelector('.video-thumbnail');
    const gifPreview = videoFrame.querySelector('.gif-preview');
    const gifTimer = videoFrame.querySelector('.gif-timer');
    
    // Hide thumbnail, show GIF preview
    videoThumbnail.style.display = 'none';
    videoFrame.style.display = 'block';
    
    // Start countdown from 10 seconds
    let timeLeft = 10;
    gifTimer.textContent = timeLeft;
    
    // Update timer every second
    const countdownInterval = setInterval(() => {
        timeLeft--;
        gifTimer.textContent = timeLeft;
        
        // When countdown reaches 0, show the YouTube video
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            
            // Set the iframe src from data-src attribute
            iframe.src = iframe.getAttribute('data-src');
            iframe.style.display = 'block';
            gifPreview.style.display = 'none';
        }
    }, 1000);
}
