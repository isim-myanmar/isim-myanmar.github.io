import React, { useEffect, useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';
import axios from 'axios';

const Compatibility = () => {
  const { t } = useContext(LanguageContext);
  const [compatibilityData, setCompatibilityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompatibilityData();
    
    // Page animations
    gsap.fromTo('.page-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.utils.toArray('.device-card').forEach((card, index) => {
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

  const fetchCompatibilityData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/compatibility`);
      setCompatibilityData(response.data);
    } catch (error) {
      console.error('Error fetching compatibility data:', error);
      // Fallback data
      setCompatibilityData({
        devices: [
          {brand: "iPhone", models: ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"], support: "full"},
          {brand: "Samsung", models: ["Galaxy S21", "Galaxy S22", "Galaxy S23", "Galaxy Note 20"], support: "full"},
          {brand: "Google", models: ["Pixel 4", "Pixel 5", "Pixel 6", "Pixel 7"], support: "full"},
          {brand: "Huawei", models: ["P40", "P50", "Mate 40", "Mate 50"], support: "limited"}
        ],
        networks: ["Telenor", "Ooredoo", "MPT", "Mytel"]
      });
    } finally {
      setLoading(false);
    }
  };

  const getSupportIcon = (support) => {
    if (support === 'full') {
      return (
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
      );
    } else if (support === 'limited') {
      return (
        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="compatibility-page py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="compatibility-page py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('nav.compatibility')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Check if your device is compatible with our eSIM technology. We support a wide range of modern smartphones and devices.
          </p>
        </div>

        {/* Compatibility Check */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-800">
              Quick Compatibility Check
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              Enter your device model to check eSIM compatibility instantly
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter device model (e.g., iPhone 14)"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary-500"
                />
                <button className="btn-3d px-8">
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Devices */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Supported Devices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {compatibilityData?.devices.map((device, index) => (
              <div key={index} className="device-card card-3d">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zM12 22c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-4H9V5h6v13z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{device.brand}</h3>
                      <p className="text-gray-600">
                        {device.support === 'full' ? 'Full Support' : 'Limited Support'}
                      </p>
                    </div>
                  </div>
                  {getSupportIcon(device.support)}
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 mb-2">Supported Models:</h4>
                  <div className="flex flex-wrap gap-2">
                    {device.models.map((model, modelIndex) => (
                      <span
                        key={modelIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Compatibility */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Network Partners
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <p className="text-center text-lg text-gray-600 mb-8">
              Our eSIM works seamlessly with all major networks in Myanmar
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {compatibilityData?.networks.map((network, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800">{network}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            eSIM Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">eSIM Support</h3>
              <p className="text-gray-300">
                Your device must have built-in eSIM capability
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Network Unlocked</h3>
              <p className="text-gray-300">
                Device should be unlocked or compatible with our network partners
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h4.586l-3.293 3.293a1 1 0 001.414 1.414L10 17.414V18a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v.586l-3.293-3.293A1 1 0 005.293 6.293L8.586 9H4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Internet Connection</h3>
              <p className="text-gray-300">
                WiFi or mobile data required for eSIM activation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compatibility;