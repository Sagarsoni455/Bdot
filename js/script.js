// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
    }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');

if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking a link on mobile
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav && nav.classList.contains('active') && mobileToggle) {
            nav.classList.remove('active');
            mobileToggle.querySelector('i').classList.add('fa-bars');
            mobileToggle.querySelector('i').classList.remove('fa-times');
        }
    });
});

// Form Submission
const form = document.getElementById('inquiryForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you shortly.');
        form.reset();
    });
}

// --- Certificate Slider ---
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.certificate-slider-container');
    
    // Only run this script if the slider container exists on the page
    if (sliderContainer) {
        const slider = sliderContainer.querySelector('.certificate-slider');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');
        const slides = slider.querySelectorAll('.certificate-slide');
        
        if (slides.length === 0) return;

        let currentIndex = 0;
        
        function updateSlider() {
            const slideWidth = slides[0].offsetWidth + 20; // 20 is the gap from CSS
            const wrapperWidth = slider.parentElement.offsetWidth;
            const slidesInView = Math.floor(wrapperWidth / slideWidth);
            const maxIndex = slides.length - slidesInView;

            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            if (currentIndex < 0) {
                currentIndex = 0;
            }
            
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }

        nextBtn.addEventListener('click', () => {
            const slideWidth = slides[0].offsetWidth + 20;
            const wrapperWidth = slider.parentElement.offsetWidth;
            const slidesInView = Math.floor(wrapperWidth / slideWidth);
            const maxIndex = slides.length - slidesInView;

            if(currentIndex < maxIndex) {
               currentIndex++;
               updateSlider();
            }
        });

        prevBtn.addEventListener('click', () => {
            if(currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        // Update slider on window resize and initial load
        window.addEventListener('resize', updateSlider);
        updateSlider(); 
    }
}); // <-- The DOMContentLoaded listener ends here.


// ✅ CORRECT: Place the goBack function here, in the global scope.
function goBack() {
    window.history.back();
}