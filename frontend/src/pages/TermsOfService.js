import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';

const TermsOfService = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    // Page animations
    gsap.fromTo('.page-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.utils.toArray('.terms-section').forEach((section, index) => {
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
    <div className="terms-of-service-page py-20">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Terms of Service</span>
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to iSIM Myanmar. These Terms of Service ("Terms") govern your use of our eSIM services, website, and mobile applications (collectively, the "Services") operated by iSIM Myanmar ("we," "us," or "our").
            </p>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access or use our Services.
            </p>
          </div>

          {/* Definitions */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-3">
              <li><strong>"eSIM"</strong> refers to an embedded SIM card technology that allows users to activate cellular plans without physical SIM cards.</li>
              <li><strong>"Services"</strong> include our eSIM provision, activation, customer support, and related telecommunications services.</li>
              <li><strong>"Account"</strong> means your registered user account with iSIM Myanmar.</li>
              <li><strong>"Device"</strong> refers to any eSIM-compatible mobile device or equipment.</li>
              <li><strong>"Plan"</strong> means the specific data and service package you purchase from us.</li>
            </ul>
          </div>

          {/* Service Description */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Service Description</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">3.1 eSIM Services</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We provide eSIM profiles and data connectivity services through our network partners in Myanmar. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>eSIM profile generation and delivery</li>
              <li>Data connectivity through partner networks</li>
              <li>Account management and customer support</li>
              <li>Usage monitoring and billing services</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">3.2 Service Availability</h3>
            <p className="text-gray-600 leading-relaxed">
              Services are available 24/7, subject to network coverage and technical limitations. We do not guarantee uninterrupted service and may suspend services for maintenance, upgrades, or due to circumstances beyond our control.
            </p>
          </div>

          {/* Account Registration */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Account Registration and Security</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">4.1 Account Creation</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              To use our Services, you must create an account by providing accurate and complete information. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Provide truthful and current information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">4.2 Age Requirements</h3>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 18 years old to create an account. If you are under 18, you may only use our Services with parental consent and supervision.
            </p>
          </div>

          {/* Payment Terms */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">5.1 Pricing and Fees</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Service fees are clearly displayed before purchase. All prices are in Myanmar Kyat (MMK) unless otherwise specified. You agree to pay all applicable fees, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>eSIM activation fees</li>
              <li>Monthly or usage-based data charges</li>
              <li>Additional service fees as applicable</li>
              <li>Government taxes and regulatory fees</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">5.2 Payment Methods</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We accept payments through Wave Money, KBZ Pay, CB Pay, AYA Pay, and major credit/debit cards. Payment processing is handled by secure third-party providers.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">5.3 Refund Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              Refunds are available within 7 days of purchase if the eSIM has not been activated. Once activated and data services are used, refunds are not available except as required by law or in cases of service failure.
            </p>
          </div>

          {/* Acceptable Use */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Acceptable Use Policy</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">6.1 Permitted Use</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may use our Services for lawful personal or business communications and data access. You agree to comply with all applicable laws and regulations.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">6.2 Prohibited Activities</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree not to use our Services for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Illegal activities or violations of applicable laws</li>
              <li>Fraud, spam, or unsolicited communications</li>
              <li>Network abuse or attempts to disrupt services</li>
              <li>Copyright infringement or intellectual property violations</li>
              <li>Activities that compromise network security</li>
              <li>Resale of services without authorization</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">6.3 Fair Use Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              We may implement fair use policies to ensure network quality for all users. Excessive usage that affects network performance may result in service limitations or additional charges.
            </p>
          </div>

          {/* Service Limitations */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Service Limitations and Warranties</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">7.1 Service Availability</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              While we strive to provide reliable service, we cannot guarantee:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Uninterrupted or error-free service</li>
              <li>Specific data speeds or network performance</li>
              <li>Coverage in all geographic areas</li>
              <li>Compatibility with all devices or software</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">7.2 Disclaimer of Warranties</h3>
            <p className="text-gray-600 leading-relaxed">
              Services are provided "as is" without warranties of any kind, either express or implied. We disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, iSIM Myanmar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or network outages</li>
              <li>Device damage or incompatibility issues</li>
              <li>Third-party service failures</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Our total liability for any claim related to the Services shall not exceed the amount paid by you for the Services in the 12 months preceding the claim.
            </p>
          </div>

          {/* Termination */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Termination</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-700">9.1 Termination by You</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may terminate your account at any time by contacting customer support. Termination does not relieve you of payment obligations for services already provided.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">9.2 Termination by Us</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may suspend or terminate your account immediately if you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Violate these Terms of Service</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Fail to pay required fees</li>
              <li>Abuse or misuse our Services</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">9.3 Effect of Termination</h3>
            <p className="text-gray-600 leading-relaxed">
              Upon termination, your right to use the Services ceases immediately. We may delete your account data in accordance with our Privacy Policy and applicable law.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Intellectual Property Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Services and all content, features, and functionality are owned by iSIM Myanmar and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You are granted a limited, non-exclusive, non-transferable license to use the Services for their intended purpose. You may not copy, modify, distribute, or create derivative works of our intellectual property.
            </p>
          </div>

          {/* Governing Law */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Myanmar. Any disputes arising from these Terms or the Services shall be resolved through:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-2">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation through a mutually agreed mediator</li>
              <li>Arbitration or court proceedings in Myanmar</li>
            </ol>
          </div>

          {/* Changes to Terms */}
          <div className="terms-section card-3d mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">12. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Posting updated Terms on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying notices within our Services</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Your continued use of the Services after the effective date of changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="terms-section card-3d">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">13. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;