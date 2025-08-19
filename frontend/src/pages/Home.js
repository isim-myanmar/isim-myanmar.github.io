import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { t } = useContext(LanguageContext);
  const [stats, setStats] = useState({
    customers: 50000,
    countries: 5,
    uptime: 99.9,
    support: 24
  });

  useEffect(() => {
    // Hero animation
    const tl = gsap.timeline();
    tl.fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5'
    )
    .fromTo('.hero-buttons', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3'
    )
    .fromTo('.hero-image', 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }, '-=0.8'
    );

    // Features animation
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
      gsap.fromTo(card, 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%"
          }
        }
      );
    });

    // Stats counter animation
    gsap.utils.toArray('.stat-number').forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => {
          const target = parseInt(element.dataset.target);
          const duration = 2;
          gsap.to({ value: 0 }, {
            value: target,
            duration,
            ease: "power2.out",
            onUpdate: function() {
              if (element.dataset.suffix) {
                element.textContent = Math.round(this.targets()[0].value) + element.dataset.suffix;
              } else {
                element.textContent = Math.round(this.targets()[0].value).toLocaleString();
              }
            }
          });
        }
      });
    });

    // Floating elements animation
    gsap.to('.float-1', {
      y: -15,
      rotation: 5,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to('.float-2', {
      y: -20,
      rotation: -3,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleGetStarted = async () => {
    try {
      // Initiate payment process
      const paymentData = {
        order_id: `ORDER_${Date.now()}`,
        amount: 10000, // 100 MMK for demo
        merchant_reference_id: `ESIM_${Date.now()}`,
        frontend_result_url: `${window.location.origin}/payment/success`,
        backend_result_url: `${process.env.REACT_APP_BACKEND_URL}/api/payment/callback`,
        payment_description: 'eSIM Activation Fee',
        items: [{
          name: 'eSIM Myanmar Starter Pack',
          amount: 10000
        }]
      };

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/initiate`, paymentData);
      
      if (response.data.success) {
        // Redirect to Wave Money payment page
        window.location.href = response.data.auth_url;
      } else {
        alert('Payment initialization failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment service is currently unavailable. Please try again later.');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">{t('home.hero.title')}</span>
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={handleGetStarted}
                  className="btn-3d text-lg px-8 py-4"
                >
                  {t('home.hero.cta1')}
                </button>
                <Link
                  to="/how-it-works"
                  className="btn-secondary bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  {t('home.hero.cta2')}
                </Link>
              </div>
              <p className="text-sm text-gray-500 mb-4">{t('home.hero.trustText')}</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.ibb.co/TDfSbyWR/isim-profile-1-48a26dad-d4e2-468c-98a0-b6b7cf5fb7cc-2-mj-EGe8-D0-K9-F15y-Bb.jpg" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.ibb.co/v4z6hDmP/screenshot-20250309-055650-zmuqh68sirbqqw1rzw3p01knm836gy-Yr-DJ59-B9-Nrtb-OBE0.png" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.ibb.co/FLqLnFg9/Chinese-New-Year-Wish-1.png" alt="User" />
                </div>
                <div className="flex items-center text-yellow-500">
                  {'★'.repeat(5)}
                  <span className="ml-2 text-gray-600 text-sm">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="hero-image relative z-10">
                <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                  <img
                    src="https://i.ibb.co/SXGHYHr8/1740819640193-1.jpg"
                    alt="eSIM Technology"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -top-6 -right-6 float-1">
                    <div className="bg-white rounded-2xl p-4 shadow-xl">
                      <div className="text-2xl font-bold text-primary-600">50K+</div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 float-2">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-4 text-white shadow-xl">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-90">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-200 rounded-full blur-2xl opacity-50 animate-bounce-slow"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.features.title')}
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="feature-card card-3d text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    {num === 1 && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>}
                    {num === 2 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>}
                    {num === 3 && <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>}
                    {num === 4 && <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {t(`home.features.feature${num}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`home.features.feature${num}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-target={stats.customers}>
                0
              </div>
              <div className="text-primary-100 text-lg">
                {t('home.stats.customers')}
              </div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-target={stats.countries}>
                0
              </div>
              <div className="text-primary-100 text-lg">
                {t('home.stats.countries')}
              </div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-target={stats.uptime} data-suffix="%">
                0%
              </div>
              <div className="text-primary-100 text-lg">
                {t('home.stats.uptime')}
              </div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-target={stats.support} data-suffix="/7">
                0/7
              </div>
              <div className="text-primary-100 text-lg">
                {t('home.stats.support')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience iSIM Myanmar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our eSIM technology is transforming connectivity across Myanmar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://i.ibb.co/vxN3pRqN/1740819640252-1.jpg',
              'https://i.ibb.co/rK9fPM7f/1740819640241-1.jpg',
              'https://i.ibb.co/v4z6hDmP/screenshot-20250309-055650-zmuqh68sirbqqw1rzw3p01knm836gy-Yr-DJ59-B9-Nrtb-OBE0.png'
            ].map((image, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="card-3d overflow-hidden">
                  <img
                    src={image}
                    alt={`iSIM Myanmar ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to Go Digital?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-on-scroll">
            Join thousands of satisfied customers who have made the switch to eSIM technology
          </p>
          <div className="animate-on-scroll">
            <button
              onClick={handleGetStarted}
              className="bg-white hover:bg-gray-100 text-primary-600 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your eSIM Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;