import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';

const Partners = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    // Page animations
    gsap.fromTo('.page-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.utils.toArray('.partner-card').forEach((card, index) => {
      gsap.fromTo(card, 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out'
        }
      );
    });
  }, []);

  const networkPartners = [
    {
      name: 'Telenor Myanmar',
      description: 'Leading telecommunications provider offering extensive 4G coverage across Myanmar.',
      coverage: '85% nationwide',
      image: 'https://i.ibb.co/SXGHYHr8/1740819640193-1.jpg'
    },
    {
      name: 'Ooredoo Myanmar',
      description: 'International telecommunications company providing reliable mobile services.',
      coverage: '80% nationwide', 
      image: 'https://i.ibb.co/vxN3pRqN/1740819640252-1.jpg'
    },
    {
      name: 'MPT (Myanmar Posts and Telecommunications)',
      description: 'National telecommunications operator with the widest network coverage.',
      coverage: '95% nationwide',
      image: 'https://i.ibb.co/rK9fPM7f/1740819640241-1.jpg'
    },
    {
      name: 'Mytel',
      description: 'Joint venture telecommunications company offering competitive data services.',
      coverage: '75% nationwide',
      image: 'https://i.ibb.co/FLqLnFg9/Chinese-New-Year-Wish-1.png'
    }
  ];

  const technologyPartners = [
    {
      name: 'Wave Money',
      description: 'Leading mobile financial services provider enabling secure payments.',
      speciality: 'Payment Processing'
    },
    {
      name: 'GSMA',
      description: 'Global mobile communications association ensuring eSIM standards compliance.',
      speciality: 'Standards & Certification'
    },
    {
      name: 'Trusted Connectivity Alliance',
      description: 'International consortium driving secure connectivity solutions.',
      speciality: 'Security & Trust'
    }
  ];

  return (
    <div className="partners-page py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Partners</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading telecommunications and technology companies to bring you the best eSIM experience in Myanmar.
          </p>
        </div>

        {/* Network Partners */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Network Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {networkPartners.map((partner, index) => (
              <div key={index} className="partner-card card-3d">
                <div className="flex flex-col h-full">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      {partner.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {partner.coverage} Coverage
                      </div>
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technology Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyPartners.map((partner, index) => (
              <div key={index} className="partner-card card-3d text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    {index === 0 && <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>}
                    {index === 1 && <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>}
                    {index === 2 && <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {partner.description}
                </p>
                <div className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium inline-block">
                  {partner.speciality}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-800">
            Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                title: 'Premium Quality',
                description: 'Best-in-class service through trusted partnerships'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                ),
                title: 'Fast Network',
                description: 'High-speed connectivity across all partner networks'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                ),
                title: 'Reliable Security',
                description: 'Enterprise-grade security through certified partners'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                title: 'Wide Coverage',
                description: 'Extensive coverage through multiple network partners'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary-800">
                  {benefit.title}
                </h3>
                <p className="text-primary-700 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Become Our Partner
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join our growing network of partners and help us expand eSIM technology across Myanmar and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Active Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-gray-300">Network Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Connected Users</div>
            </div>
          </div>
          <a
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Partner With Us
          </a>
        </div>

        {/* Partnership Process */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partnership Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Contact',
                description: 'Reach out to discuss partnership opportunities'
              },
              {
                step: '02',
                title: 'Assessment',
                description: 'Technical and business capability evaluation'
              },
              {
                step: '03',
                title: 'Integration',
                description: 'System integration and testing phase'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Go live with full partnership benefits'
              }
            ].map((process, index) => (
              <div key={index} className="partner-card text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;