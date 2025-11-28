import React, { useEffect, useState, useRef } from 'react';
import './CSS/AboutPage.css';

const CounterNumber = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        const endValue = parseInt(end, 10);
        
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * endValue));
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const AboutPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Initialize scroll animations
        const elements = document.querySelectorAll('.about-fade-in, .about-slide-left, .about-slide-right');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section with Parallax */}
            <section className="about-hero">
                <div 
                    className="about-hero-bg"
                    style={{ transform: `translateY(${scrollY * 0.4}px)` }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80" 
                        alt="Elegant living room"
                    />
                </div>
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content about-fade-in">
                    <h1>Our Story</h1>
                    <p>Crafting Timeless Spaces Since 2014</p>
                </div>
            </section>

            {/* Brand Story Section */}
            <section className="about-story">
                <div className="about-story-container">
                    <div className="about-story-image about-slide-left">
                        <img 
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                            alt="Interior design"
                        />
                    </div>
                    <div className="about-story-content about-slide-right">
                        <span className="about-label">Who We Are</span>
                        <h2>Curating Beauty for Your Home</h2>
                        <p>
                            At SAGE & STONE, we believe your home should be a reflection of your 
                            unique story. Founded in 2014, we've dedicated ourselves to sourcing 
                            and curating the finest pieces of home decor that blend modern aesthetics 
                            with timeless comfort.
                        </p>
                        <p>
                            Our journey began with a simple vision: to help people create spaces 
                            that inspire and nurture. Every item in our collection is carefully 
                            selected, ensuring it meets our exacting standards for quality, 
                            craftsmanship, and design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section with Counter Animation */}
            <section className="about-stats">
                <div className="about-stats-bg"
                    style={{ transform: `translateY(${(scrollY - 800) * 0.2}px)` }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1920&q=80" 
                        alt="Modern interior"
                    />
                </div>
                <div className="about-stats-overlay"></div>
                <div className="about-stats-content">
                    <div className="stat-item about-fade-in" style={{ transitionDelay: '0.1s' }}>
                        <span className="stat-number">
                            <CounterNumber end={10} suffix="+" />
                        </span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item about-fade-in" style={{ transitionDelay: '0.2s' }}>
                        <span className="stat-number">
                            <CounterNumber end={50} suffix="K+" />
                        </span>
                        <span className="stat-label">Happy Customers</span>
                    </div>
                    <div className="stat-item about-fade-in" style={{ transitionDelay: '0.3s' }}>
                        <span className="stat-number">
                            <CounterNumber end={500} suffix="+" />
                        </span>
                        <span className="stat-label">Curated Products</span>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="about-values-header about-fade-in">
                    <span className="about-label">Our Values</span>
                    <h2>What Drives Us</h2>
                </div>
                <div className="about-values-grid">
                    <div className="value-item about-fade-in" style={{ transitionDelay: '0.1s' }}>
                        <div className="value-icon">✨</div>
                        <h3>Quality First</h3>
                        <p>Every piece is hand-selected for exceptional craftsmanship and enduring quality.</p>
                    </div>
                    <div className="value-item about-fade-in" style={{ transitionDelay: '0.2s' }}>
                        <div className="value-icon">🌿</div>
                        <h3>Sustainable Design</h3>
                        <p>We prioritize eco-friendly materials and sustainable production practices.</p>
                    </div>
                    <div className="value-item about-fade-in" style={{ transitionDelay: '0.3s' }}>
                        <div className="value-icon">💫</div>
                        <h3>Timeless Style</h3>
                        <p>Our collections are designed to transcend trends and remain beautiful for years.</p>
                    </div>
                    <div className="value-item about-fade-in" style={{ transitionDelay: '0.4s' }}>
                        <div className="value-icon">❤️</div>
                        <h3>Customer Love</h3>
                        <p>Your satisfaction is our priority, from selection to delivery and beyond.</p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="about-timeline">
                <div className="about-timeline-header about-fade-in">
                    <span className="about-label">Our Journey</span>
                    <h2>Milestones</h2>
                </div>
                <div className="timeline-container">
                    <div className="timeline-item about-slide-left">
                        <div className="timeline-year">2014</div>
                        <div className="timeline-content">
                            <h3>The Beginning</h3>
                            <p>SAGE & STONE was founded with a passion for beautiful home design.</p>
                        </div>
                    </div>
                    <div className="timeline-item about-slide-right">
                        <div className="timeline-year">2017</div>
                        <div className="timeline-content">
                            <h3>Expanding Horizons</h3>
                            <p>Launched our first international shipping, reaching customers worldwide.</p>
                        </div>
                    </div>
                    <div className="timeline-item about-slide-left">
                        <div className="timeline-year">2020</div>
                        <div className="timeline-content">
                            <h3>Digital Growth</h3>
                            <p>Transformed our online presence to better serve our growing community.</p>
                        </div>
                    </div>
                    <div className="timeline-item about-slide-right">
                        <div className="timeline-year">2024</div>
                        <div className="timeline-content">
                            <h3>10 Years Strong</h3>
                            <p>Celebrating a decade of helping customers create their dream spaces.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Image Section */}
            <section className="about-final">
                <div className="about-final-image about-fade-in">
                    <img 
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80" 
                        alt="Beautiful home interior"
                    />
                </div>
                <div className="about-final-content about-fade-in">
                    <h2>Ready to Transform Your Space?</h2>
                    <p>Explore our collection and find pieces that speak to you.</p>
                    <a href="/shop" className="about-cta">Shop Now</a>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
