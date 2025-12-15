import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Fast & Secure Mobile Recharge
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Recharge your mobile instantly with our validated forms and secure payment system.
            Experience hassle-free recharges with real-time validation.
          </p>
          <div className="space-x-4">
            <Link 
              to="/recharge" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Recharge
            </Link>
            <Link 
              to="/signup" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold mb-2">Form Validation</h3>
              <p className="text-gray-600">Advanced form validation with real-time error checking and user-friendly messages.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Processing</h3>
              <p className="text-gray-600">Your data is validated and processed securely with industry-standard practices.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
              <p className="text-gray-600">Get immediate feedback on form inputs with our React Hook Form integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Validated Forms?</h2>
          <p className="text-xl mb-8">Join our platform and enjoy seamless form handling with comprehensive validation.</p>
          <Link 
            to="/signup" 
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;