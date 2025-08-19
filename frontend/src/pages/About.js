import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';

const About = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    // Page animations
    gsap.fromTo('.page-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.utils.toArray('.animate-card').forEach((card, index) => {
      gsap.fromTo(card, 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out'
        }
      );
    });
  }, []);

  return (
    <div className="about-page py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('about.title')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-card">
            <img
              src="https://i.ibb.co/TDfSbyWR/isim-profile-1-48a26dad-d4e2-468c-98a0-b6b7cf5fb7cc-2-mj-EGe8-D0-K9-F15y-Bb.jpg"
              alt="iSIM Myanmar Team"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
          <div className="animate-card">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Pioneering eSIM Technology in Myanmar
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              iSIM Myanmar is at the forefront of digital transformation in telecommunications. We provide cutting-edge eSIM solutions that eliminate the need for physical SIM cards while maintaining the highest standards of connectivity and reliability.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experts has worked tirelessly to bring this revolutionary technology to Myanmar, ensuring seamless integration with local networks and providing unparalleled customer service.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="animate-card card-3d text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {t('about.mission.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="animate-card card-3d text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {t('about.vision.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.vision.description')}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="animate-card text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                key: 'innovation',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
                  </svg>
                )
              },
              {
                key: 'reliability',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                )
              },
              {
                key: 'customer',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0016.96 6H16c-.8 0-1.54.37-2.03.96l-2.54 7.63H14v6h6z"/>
                  </svg>
                )
              },
              {
                key: 'transparency',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={value.key} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`about.values.${value.key}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="animate-card text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Thant Zin',
                role: 'Chief Executive Officer',
                image: 'https://i.ibb.co/TDfSbyWR/isim-profile-1-48a26dad-d4e2-468c-98a0-b6b7cf5fb7cc-2-mj-EGe8-D0-K9-F15y-Bb.jpg'
              },
              {
                name: 'Zaw Min',
                role: 'Chief Technology Officer',
                image: 'https://i.ibb.co/SXGHYHr8/1740819640193-1.jpg'
              },
              {
                name: 'Aye Chan',
                role: 'Head of Operations',
                image: 'https://i.ibb.co/vxN3pRqN/1740819640252-1.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="card-3d text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="animate-card bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">2023</div>
              <div className="text-primary-100">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;