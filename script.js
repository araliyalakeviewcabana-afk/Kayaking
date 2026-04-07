document.addEventListener("DOMContentLoaded", () => {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            const icon = mobileMenuBtn.querySelector("i");
            if (mobileMenu.classList.contains("hidden")) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            } else {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }
        });
    }

    // Scroll effect for Navbar transparency
    const navbar = document.getElementById("navbar");
    const navBg = document.getElementById("nav-bg");
    
    // Check if we are on the homepage or other pages
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('.html');

    if (navbar && isHomePage) {
        // Initially on homepage, navbar could be transparent at the very top
        if (navBg) {
            navBg.style.opacity = window.scrollY > 50 ? '1' : '0.3';
        }

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                if(navBg) navBg.style.opacity = '1';
                navbar.classList.add("shadow-lg");
            } else {
                if(navBg) navBg.style.opacity = '0.3';
                navbar.classList.remove("shadow-lg");
            }
        });
    }

    // Smooth reveal animation for elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add .fade-element class to elements you want to reveal on scroll
    document.querySelectorAll('.fade-element').forEach(el => {
        observer.observe(el);
    });
});
