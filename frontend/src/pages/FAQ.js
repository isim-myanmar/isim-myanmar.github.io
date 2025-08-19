import React, { useEffect, useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';

const FAQ = () => {
  const { t } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Page animations
    gsap.fromTo('.page-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.utils.toArray('.faq-item').forEach((item, index) => {
      gsap.fromTo(item, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out'
        }
      );
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is an eSIM?',
          answer: 'An eSIM (embedded SIM) is a digital SIM card that is built into your device. Unlike traditional physical SIM cards, eSIMs can be programmed remotely and allow you to activate a cellular plan without needing a physical SIM card.'
        },
        {
          question: 'How does iSIM Myanmar work?',
          answer: 'iSIM Myanmar provides eSIM profiles that you can download and install on your compatible device. Once installed, you can connect to our partner networks in Myanmar and enjoy data services just like with a traditional SIM card.'
        },
        {
          question: 'What are the benefits of using eSIM?',
          answer: 'eSIM offers several advantages: instant activation without visiting a store, ability to have multiple profiles on one device, no risk of losing or damaging a physical SIM, easy switching between carriers, and perfect for international travel.'
        }
      ]
    },
    {
      category: 'Compatibility',
      questions: [
        {
          question: 'Which devices support eSIM?',
          answer: 'Most modern smartphones support eSIM, including iPhone 12 and later, Samsung Galaxy S21 and later, Google Pixel 4 and later, and many other flagship devices. Check our compatibility page for a full list.'
        },
        {
          question: 'How do I know if my phone supports eSIM?',
          answer: 'You can check in your phone settings under "Cellular" or "Mobile Network" for eSIM options. Alternatively, dial *#06# to see if you have an EID number, which indicates eSIM support.'
        },
        {
          question: 'Can I use eSIM and physical SIM together?',
          answer: 'Yes! Most eSIM-compatible devices support dual SIM functionality, allowing you to use both an eSIM and a physical SIM simultaneously. This is perfect for having separate numbers for business and personal use.'
        }
      ]
    },
    {
      category: 'Setup & Activation',
      questions: [
        {
          question: 'How do I activate my eSIM?',
          answer: 'After purchasing, you\'ll receive a QR code via email. Simply go to your device\'s cellular settings, select "Add Cellular Plan," and scan the QR code with your camera. Your eSIM will be activated automatically.'
        },
        {
          question: 'How long does activation take?',
          answer: 'eSIM activation is usually instant! Once you scan the QR code and confirm the installation, your eSIM should be active within 2-5 minutes. In rare cases, it may take up to 30 minutes.'
        },
        {
          question: 'What if I lose my QR code?',
          answer: 'Don\'t worry! Contact our support team at info@isimmyanmar.com or call 09970000616, and we\'ll resend your activation QR code. Keep in mind that QR codes can only be used once.'
        }
      ]
    },
    {
      category: 'Plans & Pricing',
      questions: [
        {
          question: 'What data plans do you offer?',
          answer: 'We offer various flexible data plans ranging from daily, weekly, to monthly packages. Plans start from as low as 1,000 MMK for 1GB daily data. Check our pricing page for current offers and detailed plan information.'
        },
        {
          question: 'Can I change my plan after activation?',
          answer: 'Yes, you can upgrade or change your plan at any time through our customer portal or by contacting support. Changes typically take effect immediately or at the next billing cycle.'
        },
        {
          question: 'Do you offer unlimited data plans?',
          answer: 'We offer high-data plans up to 100GB monthly. While truly unlimited plans aren\'t available yet, our large data packages should meet most users\' needs. Fair usage policies apply to all plans.'
        }
      ]
    },
    {
      category: 'Payment & Billing',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept Wave Money, KBZ Pay, CB Pay, AYA Pay, and most major credit/debit cards. All payments are processed securely through our payment partners.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely! We use industry-standard encryption and work with certified payment processors. We never store your complete payment information on our servers.'
        },
        {
          question: 'Can I get a refund?',
          answer: 'Refunds are available within 7 days of purchase if you haven\'t activated your eSIM. Once activated and data is used, refunds are not available. Contact support for specific refund requests.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'My eSIM isn\'t working, what should I do?',
          answer: 'First, ensure your device has good WiFi/cellular coverage and restart your device. Check that eSIM is selected in your cellular settings. If issues persist, contact our 24/7 support team for immediate assistance.'
        },
        {
          question: 'Can I transfer my eSIM to a new phone?',
          answer: 'eSIM profiles are tied to specific devices and cannot be directly transferred. However, you can contact support to deactivate the old eSIM and get a new activation code for your new device.'
        },
        {
          question: 'What happens if I factory reset my phone?',
          answer: 'Factory reset will remove your eSIM profile. Contact our support team with your order details, and we\'ll provide a new QR code to reinstall your eSIM at no additional cost.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about eSIM technology and iSIM Myanmar services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              {category.category}
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {category.questions.map((faq, index) => {
                const globalIndex = categoryIndex * 100 + index; // Unique index across all categories
                return (
                  <div
                    key={globalIndex}
                    className="faq-item card-3d overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                    >
                      <span className="font-semibold text-lg text-gray-800 pr-4">
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${
                        activeIndex === globalIndex ? 'transform rotate-180' : ''
                      }`}>
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === globalIndex ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is available 24/7 to assist you with any questions or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:09970000616"
              className="bg-white hover:bg-gray-100 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Call Support: 09970000616
            </a>
            <a
              href="mailto:info@isimmyanmar.com"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
            >
              Email: info@isimmyanmar.com
            </a>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                title: 'Device Compatibility',
                description: 'Check if your device supports eSIM'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                title: 'Activation Guide',
                description: 'Step-by-step eSIM setup instructions'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                )
,
                title: 'Payment Methods',
                description: 'Supported payment options and billing'
              }
            ].map((topic, index) => (
              <div key={index} className="card-3d text-center hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {topic.title}
                </h3>
                <p className="text-gray-600">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;