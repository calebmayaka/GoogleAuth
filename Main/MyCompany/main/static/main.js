// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on user's system preference
document.documentElement.setAttribute('data-theme', 
    prefersDarkScheme.matches ? 'dark' : 'light'
);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
});

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-based animations
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Services Modal Functionality
const modal = document.getElementById('work-modal');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const closeModal = document.querySelector('.close-modal');

// Sample work data for each service
const serviceWork = {
    web: {
        title: 'Web Development Portfolio',
        images: [
            'https://placehold.co/600x400/4a90e2/ffffff?text=Website+1',
            'https://placehold.co/600x400/2ecc71/ffffff?text=Website+2',
            'https://placehold.co/600x400/e74c3c/ffffff?text=Web+App'
        ]
    },
    video: {
        title: 'Video Editing Showcase',
        images: [
            'https://placehold.co/600x400/9b59b6/ffffff?text=Video+Project+1',
            'https://placehold.co/600x400/e67e22/ffffff?text=Video+Project+2',
            'https://placehold.co/600x400/1abc9c/ffffff?text=Commercial'
        ]
    },
    computer: {
        title: 'Computer Repair Services',
        images: [
            'https://placehold.co/600x400/34495e/ffffff?text=Repair+Work+1',
            'https://placehold.co/600x400/95a5a6/ffffff?text=Maintenance',
            'https://placehold.co/600x400/d35400/ffffff?text=Upgrades'
        ]
    },
    printer: {
        title: 'Printer Repair Portfolio',
        images: [
            'https://placehold.co/600x400/27ae60/ffffff?text=Printer+Fix+1',
            'https://placehold.co/600x400/c0392b/ffffff?text=Maintenance',
            'https://placehold.co/600x400/8e44ad/ffffff?text=Installation'
        ]
    },
    network: {
        title: 'Networking Projects',
        images: [
            'https://placehold.co/600x400/2c3e50/ffffff?text=Network+Setup',
            'https://placehold.co/600x400/f1c40f/ffffff?text=Security',
            'https://placehold.co/600x400/e74c3c/ffffff?text=Maintenance'
        ]
    },
    talks: {
        title: 'Tech Talks & Presentations',
        images: [
            'https://placehold.co/600x400/3498db/ffffff?text=Conference',
            'https://placehold.co/600x400/2ecc71/ffffff?text=Workshop',
            'https://placehold.co/600x400/e67e22/ffffff?text=Seminar'
        ]
    },
    events: {
        title: 'Event Coverage',
        images: [
            'https://placehold.co/600x400/9b59b6/ffffff?text=Corporate+Event',
            'https://placehold.co/600x400/f39c12/ffffff?text=Conference',
            'https://placehold.co/600x400/16a085/ffffff?text=Tech+Meetup'
        ]
    },
    graphics: {
        title: 'Graphics Design Portfolio',
        images: [
            'https://placehold.co/600x400/c0392b/ffffff?text=Logo+Design',
            'https://placehold.co/600x400/2980b9/ffffff?text=Branding',
            'https://placehold.co/600x400/27ae60/ffffff?text=Marketing'
        ]
    }
};

// Event listeners for view work buttons
document.querySelectorAll('.view-work-btn').forEach(button => {
    button.addEventListener('click', () => {
        const service = button.getAttribute('data-service');
        const work = serviceWork[service];
        
        modalTitle.textContent = work.title;
        modalGallery.innerHTML = work.images.map(img => `
            <img src="${img}" alt="${work.title}" loading="lazy">
        `).join('');
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal functionality
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});