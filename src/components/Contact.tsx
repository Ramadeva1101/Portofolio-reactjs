import React, { useState, useRef } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Get form data
    const form = e.target as HTMLFormElement;
    const name = form.from_name.value;
    const email = form.email.value;
    const message = form.message.value;

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
      to_name: 'Ramadeva', // Nama penerima tetap
    };
    
    try {
      const result = await emailjs.send(
        'service_5165il4',
        'template_05pwt0t',
        templateParams,
        'uD8RdjG5qES5L3idS'
      );

      console.log('SUCCESS!', result.text);
      setStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;