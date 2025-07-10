// Global Variables
let vantaEffect;
let gsapTimeline;
let scrollProgress = 0;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoader();
    initializeNavigation();
    initializeScrollAnimations();
    initializeCounters();
    initializeFormHandling();
    initializeMobileMenu();
    initializeScrollProgress();
    
    // Initialize 3D effects after a short delay
    setTimeout(() => {
        initialize3DEffects();
    }, 1000);
});

// Loading Screen
function initializeLoader() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Hide loading screen after completion
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    document.body.classList.remove('loading');
                }, 500);
            }, 500);
        }
        loadingProgress.style.width = progress + '%';
    }, 100);
}

// Navigation
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: offsetTop, autoKill: false },
                    ease: "power2.inOut"
                });
            }
        });
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll Progress Bar
function initializeScrollProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
        scrollProgress = scrollPercent;
    });
}

// Initialize 3D Effects
function initialize3DEffects() {
    // Initialize Vanta.js background
    if (typeof VANTA !== 'undefined') {
        vantaEffect = VANTA.FOG({
            el: "#hero-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x4caf50,
            midtoneColor: 0x2d5c3a,
            lowlightColor: 0x1a3a2e,
            baseColor: 0x1a3a2e,
            blurFactor: 0.6,
            speed: 1.0,
            zoom: 1.0
        });
    }
    
    // Initialize other 3D elements
    initialize3DAboutSection();
    initialize3DGeographySection();
}

// 3D About Section
function initialize3DAboutSection() {
    const aboutElement = document.getElementById('about-3d-element');
    if (!aboutElement) return;
    
    // Create a simple 3D visualization
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, aboutElement.clientWidth / aboutElement.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(aboutElement.clientWidth, aboutElement.clientHeight);
    renderer.setClearColor(0x000000, 0);
    aboutElement.appendChild(renderer.domElement);
    
    // Create floating geometric shapes
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x4caf50,
        wireframe: true
    });
    
    const cubes = [];
    for (let i = 0; i < 5; i++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = (Math.random() - 0.5) * 10;
        cube.position.y = (Math.random() - 0.5) * 10;
        cube.position.z = (Math.random() - 0.5) * 10;
        scene.add(cube);
        cubes.push(cube);
    }
    
    camera.position.z = 5;
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        cubes.forEach(cube => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = aboutElement.clientWidth / aboutElement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(aboutElement.clientWidth, aboutElement.clientHeight);
    });
}

// 3D Geography Section
function initialize3DGeographySection() {
    const mapElement = document.getElementById('world-map-3d');
    if (!mapElement) return;
    
    // Create a simple globe visualization
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mapElement.clientWidth / mapElement.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(mapElement.clientWidth, mapElement.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mapElement.appendChild(renderer.domElement);
    
    // Create a wireframe sphere (globe)
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x4caf50,
        wireframe: true
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // Add some point lights to represent offices
    const pointGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0x8bc34a });
    
    const points = [];
    const pointPositions = [
        [1.5, 0.5, 1.5],   // MENA
        [0.5, 1.5, -1.5],  // Far East
        [-1.5, -0.5, 1.5]  // East Africa
    ];
    
    pointPositions.forEach(pos => {
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        point.position.set(...pos);
        scene.add(point);
        points.push(point);
    });
    
    camera.position.z = 5;
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        sphere.rotation.y += 0.005;
        
        points.forEach(point => {
            point.scale.setScalar(1 + Math.sin(Date.now() * 0.01) * 0.3);
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = mapElement.clientWidth / mapElement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mapElement.clientWidth, mapElement.clientHeight);
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate statistics section
    gsap.from(".stat-item", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".statistics",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Animate service cards
    gsap.from(".service-card", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Animate sustainability pillars
    gsap.from(".pillar", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".sustainability",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Parallax effect for hero section
    gsap.to(".hero-background", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}

// Animated Counters
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        
        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            onEnter: () => {
                gsap.to(counter, {
                    duration: 2,
                    innerHTML: target,
                    ease: "power2.out",
                    snap: { innerHTML: 1 },
                    onUpdate: function() {
                        const value = Math.ceil(this.targets()[0].innerHTML);
                        if (target >= 1000) {
                            counter.innerHTML = (value / 1000).toFixed(1) + 'k';
                        } else {
                            counter.innerHTML = value;
                        }
                    }
                });
            }
        });
    });
}

// Form Handling
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Mouse Effects
function initializeMouseEffects() {
    // Add cursor trail effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .stat-item, .pillar');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.05,
                rotationX: 5,
                rotationY: 5,
                transformPerspective: 1000,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                ease: "power2.out"
            });
        });
        
        // Add tilt effect based on mouse position
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const rotateX = (e.clientY - centerY) / 10;
            const rotateY = (centerX - e.clientX) / 10;
            
            gsap.to(card, {
                duration: 0.3,
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                ease: "power2.out"
            });
        });
    });
}

// Intersection Observer for animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Resize handler
function handleResize() {
    // Update Vanta effect
    if (vantaEffect) {
        vantaEffect.resize();
    }
    
    // Update any other size-dependent elements
    const heroBackground = document.getElementById('hero-background');
    if (heroBackground) {
        heroBackground.style.height = window.innerHeight + 'px';
    }
}

// Add resize event listener
window.addEventListener('resize', handleResize);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 10);
    };
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Clean up function
function cleanup() {
    if (vantaEffect) {
        vantaEffect.destroy();
    }
    
    // Remove event listeners
    window.removeEventListener('resize', handleResize);
    
    // Kill GSAP animations
    if (gsapTimeline) {
        gsapTimeline.kill();
    }
}

// Clean up on page unload
window.addEventListener('beforeunload', cleanup);