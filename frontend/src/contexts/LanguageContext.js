import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      compatibility: 'Compatibility',
      howItWorks: 'How it Works',
      faq: 'FAQ',
      contact: 'Contact',
      partners: 'Partners',
      getStarted: 'Get Started',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    },
    // Home Page
    home: {
      hero: {
        title: 'Revolutionary eSIM Technology for Myanmar',
        subtitle: 'Stay connected anywhere with instant eSIM activation. No physical SIM cards needed.',
        cta1: 'Get Your eSIM',
        cta2: 'Learn More',
        trustText: 'Trusted by thousands of users across Myanmar'
      },
      features: {
        title: 'Why Choose iSIM Myanmar?',
        feature1: {
          title: 'Instant Activation',
          description: 'Get connected in minutes with our quick eSIM activation process.'
        },
        feature2: {
          title: 'Wide Coverage',
          description: 'Enjoy reliable coverage across all major networks in Myanmar.'
        },
        feature3: {
          title: 'Affordable Plans',
          description: 'Choose from flexible and cost-effective data plans.'
        },
        feature4: {
          title: 'Device Compatibility',
          description: 'Works with all major eSIM-compatible devices and brands.'
        }
      },
      stats: {
        customers: 'Happy Customers',
        countries: 'Countries Covered',
        uptime: 'Network Uptime',
        support: '24/7 Support'
      }
    },
    // About Page
    about: {
      title: 'About iSIM Myanmar',
      subtitle: 'Leading the digital transformation of telecommunications in Myanmar',
      mission: {
        title: 'Our Mission',
        description: 'To provide seamless, innovative, and affordable eSIM solutions that connect Myanmar to the world.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be Myanmar\'s most trusted telecommunications partner, enabling digital connectivity for everyone.'
      },
      values: {
        title: 'Our Values',
        innovation: 'Innovation',
        reliability: 'Reliability',
        customer: 'Customer First',
        transparency: 'Transparency'
      }
    },
    // Contact
    contact: {
      title: 'Get in Touch',
      subtitle: 'We\'re here to help you stay connected',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Message',
        submit: 'Send Message',
        success: 'Thank you! We\'ll get back to you soon.',
        error: 'Something went wrong. Please try again.'
      },
      info: {
        address: 'Myanmar',
        email: 'info@isimmyanmar.com',
        phone: '09970000616',
        telegram: '@iSIMMyanmar'
      }
    },
    // Footer
    footer: {
      description: 'iSIM Myanmar provides cutting-edge eSIM technology for seamless connectivity across Myanmar and beyond.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      contact: 'Contact Info',
      copyright: '© {year} iSIM Myanmar. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    // Common
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewAll: 'View All',
      readMore: 'Read More',
      comingSoon: 'Coming Soon',
      loading: 'Loading...'
    }
  },
  my: {
    // Navigation (Myanmar)
    nav: {
      home: 'ပင်မစာမျက်နှာ',
      about: 'အကြောင်း',
      compatibility: 'လိုက်ဖက်မှု',
      howItWorks: 'မည်သို့အလုပ်လုပ်သနည်း',
      faq: 'မေးလေ့ရှိသောမေးခွန်းများ',
      contact: 'ဆက်သွယ်ရန်',
      partners: 'လုပ်ကိုင်ဖော်များ',
      getStarted: 'စတင်ရန်',
      privacyPolicy: 'ကိုယ်ရေးကိုယ်တာမူဝါဒ',
      termsOfService: 'ဝန်ဆောင်မှုစည်းမျဉ်းများ'
    },
    // Home Page (Myanmar)
    home: {
      hero: {
        title: 'မြန်မာနိုင်ငံအတွက် 혁명적 eSIM နည်းပညာ',
        subtitle: 'ချက်ခြင်း eSIM အသက်ဝင်စေခြင်းဖြင့် မည်သည့်နေရာတွင်မဆို ချိတ်ဆက်နေပါ။ ရုပ်ပိုင်း SIM ကတ်များ မလိုအပ်ပါ။',
        cta1: 'သင်၏ eSIM ရယူပါ',
        cta2: 'ပိုမိုလေ့လာပါ',
        trustText: 'မြန်မာနိုင်ငံတစ်ဝန်း ရှိ အသုံးပြုသူ ထောင်ပေါင်းများစွာ ယုံကြည်အားကိုးသည်'
      },
      features: {
        title: 'iSIM Myanmar ကို အဘယ်ကြောင့် ရွေးချယ်သနည်း?',
        feature1: {
          title: 'ချက်ခြင်းအသက်ဝင်စေခြင်း',
          description: 'ကျွန်ုပ်တို့၏ လျင်မြန်သော eSIM အသက်ဝင်စေသည့် လုပ်ငန်းစဉ်ဖြင့် မိနစ်ပိုင်းအတွင်း ချိတ်ဆက်ပါ။'
        },
        feature2: {
          title: 'ကျယ်ပြန့်သောလွှမ်းခြုံမှု',
          description: 'မြန်မာနိုင်ငံရှိ အဓိကကွန်ယက်များအားလုံးတွင် ယုံကြည်ရသောလွှမ်းခြုံမှုကို ပျော်မွေ့ပါ။'
        },
        feature3: {
          title: 'သက်သာသောအစီအစဉ်များ',
          description: 'ပြောင်းလွယ်ပြင်လွယ်နှင့် စျေးနှုန်းသင့်တင့်သော ဒေတာအစီအစဉ်များမှ ရွေးချယ်ပါ။'
        },
        feature4: {
          title: 'ကိရိယာလိုက်ဖက်မှု',
          description: 'eSIM-လိုက်ဖက်သော အဓိကကိရိယာများနှင့် အမှတ်တံဆိပ်အားလုံးနှင့် လုပ်ဆောင်သည်။'
        }
      },
      stats: {
        customers: 'ပျော်ရွှင်သောဖောက်သည်များ',
        countries: 'လွှမ်းခြုံသောနိုင်ငံများ',
        uptime: 'ကွန်ယက်အလုပ်လုပ်ချိန်',
        support: '24/7 အထောက်အပံ့'
      }
    },
    // About Page (Myanmar)
    about: {
      title: 'iSIM Myanmar အကြောင်း',
      subtitle: 'မြန်မာနိုင်ငံတွင် ဆက်သွယ်ရေးနည်းပညာ၏ ဒစ်ဂျစ်တယ်ပြောင်းလဲမှုကို ဦးဆောင်နေသည်',
      mission: {
        title: 'ကျွန်ုပ်တို့၏မစ်ရှင်',
        description: 'မြန်မာနိုင်ငံကို ကမ္ဘာနှင့်ဆက်သွယ်ပေးသည့် ချောမွေ့၊ ဆန်းသစ်၊ နှင့် သက်သာသော eSIM ဖြေရှင်းချက်များ ပံ့ပိုးပေးရန်။'
      },
      vision: {
        title: 'ကျွန်ုပ်တို့၏အမြင်',
        description: 'မြန်မာနိုင်ငံ၏ အယုံကြည်ရဆုံး ဆက်သွယ်ရေးမိတ်ဖက်ဖြစ်ရန်၊ လူတိုင်းအတွက် ဒစ်ဂျစ်တယ်ချိတ်ဆက်မှုကို အထောက်အပံ့ပေးရန်။'
      },
      values: {
        title: 'ကျွန်ုပ်တို့၏တန်ဖိုးများ',
        innovation: 'ဆန်းသစ်တီထွင်မှု',
        reliability: 'ယုံကြည်ရမှု',
        customer: 'ဖောက်သည်ကိုအရင်',
        transparency: 'ပွင့်လင်းမြင်သာမှု'
      }
    },
    // Contact (Myanmar)
    contact: {
      title: 'ဆက်သွယ်ပါ',
      subtitle: 'ကျွန်ုပ်တို့သည် သင့်အား ချိတ်ဆက်နေရန် ကူညီရန် ရှိပါသည်',
      form: {
        name: 'အမည်အပြည့်အစုံ',
        email: 'အီးမေးလ်လိပ်စာ',
        phone: 'ဖုန်းနံပါတ်',
        message: 'စာတစ်စောင်',
        submit: 'စာပို့ရန်',
        success: 'ကျေးဇူးတင်ပါသည်! ကျွန်ုပ်တို့ မကြာမီ သင့်ကို ပြန်လည်ဆက်သွယ်ပါမည်။',
        error: 'တစ်ခုခုမှားယွင်းနေပါသည်။ ကျေးဇူးပြုပြီး ထပ်လုပ်ကြည့်ပါ။'
      },
      info: {
        address: 'မြန်မာနိုင်ငံ',
        email: 'info@isimmyanmar.com',
        phone: '09970000616',
        telegram: '@iSIMMyanmar'
      }
    },
    // Footer (Myanmar)
    footer: {
      description: 'iSIM Myanmar သည် မြန်မာနိုင်ငံနှင့် အခြားနေရာများတွင် ချောမွေ့သောချိတ်ဆက်မှုအတွက် ခေတ်မီ eSIM နည်းပညာကို ပံ့ပိုးပေးသည်။',
      quickLinks: 'လျင်မြန်သောလင့်များ',
      legal: 'ဥပဒေရေးရာ',
      contact: 'ဆက်သွယ်ရန်အချက်အလက်',
      copyright: '© {year} iSIM Myanmar။ မူပိုင်ခွင့်အားလုံးကို သီးသန့်ပိုင်သည်။',
      privacy: 'ကိုယ်ရေးကိုယ်တာမူဝါဒ',
      terms: 'ဝန်ဆောင်မှုစည်းမျဉ်းများ'
    },
    // Common (Myanmar)
    common: {
      learnMore: 'ပိုမိုလေ့လာပါ',
      getStarted: 'စတင်ပါ',
      viewAll: 'အားလုံးကြည့်ပါ',
      readMore: 'ပိုမိုဖတ်ရှုပါ',
      comingSoon: 'မကြာမီရောက်မည်',
      loading: 'ဖွင့်နေသည်...'
    }
  }
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = key; // Return key if translation not found
        break;
      }
    }
    
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] || match;
      });
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;