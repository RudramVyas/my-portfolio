// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Set the current year in the footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const menuList = document.getElementById('menu-list');
  
    if (hamburger && menuList) {
      hamburger.addEventListener('click', () => {
        menuList.classList.toggle('show-menu');
  
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
      });
    }
  
    // Intersection Observer for Animations
    const animateOnScroll = () => {
      const items = document.querySelectorAll('.timeline-item, .project-card, .skill-card, .education-item, .contact-info, form');
      
      const observerOptions = {
        threshold: 0.2
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
  
      items.forEach(item => observer.observe(item));
    };
  
    // Initialize animations on scroll
    animateOnScroll();
  
    // Page Transition Effects using overlay
    const transitionOverlay = document.getElementById('transition-overlay');
  
    // Function to handle page transitions
    const handlePageTransition = (href) => {
      if (transitionOverlay) {
        transitionOverlay.classList.add('active');
        document.body.classList.add('transitioning');
  
        // Disable all links during transition to prevent multiple clicks
        document.querySelectorAll('a').forEach(link => {
          link.style.pointerEvents = 'none';
        });
  
        // Wait for the fade-out animation to complete before navigating
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Duration should match the CSS transition duration
      } else {
        window.location.href = href;
      }
    };
  
    // Attach event listeners to internal links for transition
    const internalLinks = document.querySelectorAll('a[href^="index.html"], a[href^="experience.html"], a[href^="projects.html"], a[href^="skills-education.html"], a[href^="contact.html"]');
  
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Ensure it's an internal link
        const href = link.getAttribute('href');
        if (href && href.startsWith('.html')) {
          e.preventDefault();
          handlePageTransition(href);
        }
      });
    });
  
    // On page load, remove the overlay to reveal the page with fade-in effect
    if (transitionOverlay) {
      // Slight delay to allow CSS to apply the initial state
      setTimeout(() => {
        transitionOverlay.classList.remove('active');
        document.body.classList.remove('transitioning');
  
        // Re-enable links after transition
        document.querySelectorAll('a').forEach(link => {
          link.style.pointerEvents = '';
        });
      }, 100); // Adjust if necessary
    }
  
    // Handle form submissions (Contact Page)
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !message) {
        alert('Please fill out all fields before submitting.');
        return;
      }
  
      // Construct mailto link
      const mailtoLink = `mailto:rudramvyas06@gmail.com?subject=Message from portfolio ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
  
      // Open the user's email client
      window.location.href = mailtoLink;
    };
  
    // Attach form submit handler if on contact page
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  });
  