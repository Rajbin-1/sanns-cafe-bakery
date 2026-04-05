import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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
            Terms of Service
          </h1>
          <p style={{ color: '#8B7355', fontSize: '1.1rem' }}>
            Last updated: April 5, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none" style={{ color: '#3E2723' }}>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              By accessing and using this website (https://sanns-cafe.vercel.app), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              2. Use License
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }} className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Sann's Café & Bakery's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul style={{ color: '#8B7355', lineHeight: '1.8' }} className="list-disc list-inside space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the Site</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              3. Disclaimer
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              The materials on Sann's Café & Bakery's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              4. Limitations
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              In no event shall Sann's Café & Bakery or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if authorized representatives have been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              5. Accuracy of Materials
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              The materials appearing on Sann's Café & Bakery's website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on the website are accurate, complete, or current.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              6. Links
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              7. Modifications
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              8. Governing Law
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              These terms and conditions are governed by and construed in accordance with the laws of Nepal, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: "'Cormorant Garamond', serif" }}>
              9. Contact Us
            </h2>
            <p style={{ color: '#8B7355', lineHeight: '1.8' }}>
              If you have any questions about these Terms of Service, please contact us at:
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
