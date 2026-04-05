import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <section className="min-h-screen py-20" style={{ backgroundColor: '#FBF8F3' }}>
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <a
            href="/#about"
            className="inline-flex items-center gap-2 mb-6 hover:text-amber-700 transition-colors"
            style={{ color: '#8B7355' }}
          >
            <ArrowLeft size={18} />
            Back to Home
          </a>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#3E2723',
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: '#8B7355', fontSize: '1.1rem' }}>
            Last updated: April 5, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none" style={{ color: '#3E2723' }}>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              1. Introduction
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              Sann's Café & Bakery ("we," "us," "our," or "Company") operates the website https://sanns-cafe.vercel.app (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              2. Information We Collect
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }} className="mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul style={{ color: '#8B7355', lineHeight: '1.8' }} className="list-disc list-inside space-y-2">
              <li>Personal Data: Name, email address, phone number (if you contact us)</li>
              <li>Device Information: IP address, browser type, operating system</li>
              <li>Usage Data: Pages visited, time spent, navigation paths</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              3. Use of Your Information
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }} className="mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul style={{ color: '#8B7355', lineHeight: '1.8' }} className="list-disc list-inside space-y-2">
              <li>To operate and improve our Site</li>
              <li>To respond to your inquiries and requests</li>
              <li>To analyze usage patterns and trends</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              4. Security of Your Information
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              5. Contact Us
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div style={{ color: '#8B7355', marginTop: '1rem' }} className="space-y-2">
              <p>Email: info@sannscafe.com.np</p>
              <p>Phone: +977-9869637793</p>
              <p>Location: Tokha, Kathmandu, Nepal</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
