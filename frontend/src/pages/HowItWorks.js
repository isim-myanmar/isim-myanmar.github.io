import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';

const HowItWorks = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    // Page animations
    gsap.fromTo('.page-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.utils.toArray('.step-card').forEach((card, index) => {
      gsap.fromTo(card, 
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out'
        }
      );
    });

    // Step line animation
    gsap.fromTo('.step-line', 
      { height: 0 },
      {
        height: '100%',
        duration: 2,
        delay: 0.5,
        ease: 'power2.inOut'
      }
    );
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Choose Your Plan',
      description: 'Select from our flexible eSIM plans that suit your data needs and budget.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      image: 'https://i.ibb.co/v4z6hDmP/screenshot-20250309-055650-zmuqh68sirbqqw1rzw3p01knm836gy-Yr-DJ59-B9-Nrtb-OBE0.png'
    },
    {
      number: '02',
      title: 'Make Payment',
      description: 'Complete your purchase securely using Wave Money or other supported payment methods.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
        </svg>
      ),
      image: 'https://i.ibb.co/FLqLnFg9/Chinese-New-Year-Wish-1.png'
    },
    {
      number: '03',
      title: 'Receive QR Code',
      description: 'Get your eSIM activation QR code instantly via email and SMS after successful payment.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586l-2 2V5H5v14h14v-3.586l2-2V19a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
          <path d="M17 8l4-4m0 0l-4-4m4 4H9"/>
        </svg>
      ),
      image: 'https://i.ibb.co/SXGHYHr8/1740819640193-1.jpg'
    },
    {
      number: '04',
      title: 'Scan & Activate',
      description: 'Simply scan the QR code with your device camera to automatically install your eSIM.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 7V5a2 2 0 012-2h2m0 0V1m0 2h2M3 17v2a2 2 0 002 2h2m0 0v2m0-2h2m8-16V1m0 2h2m0 0a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2m0 0v2m0-2h-2"/>
        </svg>
      ),
      image: 'https://i.ibb.co/vxN3pRqN/1740819640252-1.jpg'
    },
    {
      number: '05',
      title: 'Start Using',
      description: 'Your eSIM is now active! Enjoy seamless connectivity across Myanmar with instant network access.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
        </svg>
      ),
      image: 'https://i.ibb.co/rK9fPM7f/1740819640241-1.jpg'
    }
  ];

  return (
    <div className="how-it-works-page py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('nav.howItWorks')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting started with eSIM Myanmar is simple and takes just a few minutes. Follow these easy steps to activate your digital SIM.
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1">
            <div className="w-full bg-gray-200 rounded-full h-full">
              <div className="step-line w-full bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="step-card relative mb-16 lg:mb-24">
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className={`card-3d ${
                    index % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <div className="text-primary-600 font-bold text-lg">
                        Step {step.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
                    />
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Dot for timeline */}
              <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12 mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-800">
              Still Have Questions?
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              Check out our comprehensive FAQ section for detailed answers to common questions.
            </p>
            <a
              href="/faq"
              className="btn-3d inline-block"
            >
              View FAQ
            </a>
          </div>
        </div>

        {/* Video Tutorial Preview */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Watch Our Tutorial
          </h2>
          <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-white max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-800 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-20 h-20 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Complete eSIM Setup Guide
            </h3>
            <p className="text-gray-300 text-lg">
              Watch our step-by-step video tutorial to see exactly how to set up your eSIM on different devices.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-3d text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Phone Support</h3>
            <p className="text-gray-600 mb-4">
              Call us anytime for immediate assistance with your eSIM setup.
            </p>
            <a href="tel:09970000616" className="text-primary-600 font-semibold">
              09970000616
            </a>
          </div>

          <div className="card-3d text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">
              Send us your questions and we'll respond within 24 hours.
            </p>
            <a href="mailto:info@isimmyanmar.com" className="text-primary-600 font-semibold">
              info@isimmyanmar.com
            </a>
          </div>

          <div className="card-3d text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.5V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Chat with our support team in real-time via Telegram.
            </p>
            <a href="https://t.me/iSIMMyanmar" className="text-primary-600 font-semibold" target="_blank" rel="noopener noreferrer">
              @iSIMMyanmar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;