import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';

const PrivacyPolicy = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    // Page animations
    gsap.fromTo('.page-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.utils.toArray('.policy-section').forEach((section, index) => {
      gsap.fromTo(section, 
        { y: 30, opacity: 0 },
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

  return (
    <div className="privacy-policy-page py-20">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Privacy Policy</span>
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              iSIM Myanmar ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our eSIM services, visit our website, or interact with our mobile applications.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our services, you consent to the collection and use of information in accordance with this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">2.1 Personal Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials and authentication information</li>
              <li>Payment information (processed through secure third-party providers)</li>
              <li>Device information (IMEI, device model, operating system)</li>
              <li>Location information (when necessary for service provision)</li>
              <li>Communication preferences and customer service interactions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">2.2 Usage Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We automatically collect certain information about your use of our services:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Data usage patterns and connection logs</li>
              <li>Website and application usage analytics</li>
              <li>Technical information about your device and network</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our eSIM services</li>
              <li>Process transactions and send transaction confirmations</li>
              <li>Authenticate your identity and prevent fraud</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Send service-related communications and updates</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Analyze usage patterns to improve service quality</li>
              <li>Develop new features and services</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">4.1 Service Providers</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may share your information with trusted third-party service providers who assist us in:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Payment processing (Wave Money, banking partners)</li>
              <li>Network services (telecommunications partners)</li>
              <li>Cloud hosting and data storage</li>
              <li>Customer support services</li>
              <li>Analytics and performance monitoring</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">4.2 Legal Requirements</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may disclose your information when required by law or in response to valid legal processes, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Compliance with Myanmar telecommunications regulations</li>
              <li>Response to lawful government requests</li>
              <li>Protection of our rights and property</li>
              <li>Prevention of fraud or illegal activities</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication systems</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </div>

          {/* Data Retention */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Specific retention periods include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Account information: Until account closure plus 7 years</li>
              <li>Transaction records: 10 years as required by financial regulations</li>
              <li>Usage logs: 2 years for service optimization</li>
              <li>Customer support records: 3 years after resolution</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We will securely delete or anonymize your information when it is no longer needed for the specified purposes.
            </p>
          </div>

          {/* Your Rights */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your information</li>
              <li><strong>Opt-out:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              To exercise these rights, please contact us at info@isimmyanmar.com or call 09970000616.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience and collect usage information. Types of cookies we use include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand usage patterns</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              You can control cookies through your browser settings, though disabling certain cookies may affect website functionality.
            </p>
          </div>

          {/* International Transfers */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries outside of Myanmar for service provision and support. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="policy-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying prominent notices in our application</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Your continued use of our services after the effective date of changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Contact Information */}
          <div className="policy-section card-3d">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@isimmyanmar.com</p>
                <p><strong>Phone:</strong> 09970000616</p>
                <p><strong>Telegram:</strong> @iSIMMyanmar</p>
                <p><strong>Address:</strong> Myanmar</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              We will respond to your inquiry within 30 days of receipt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;