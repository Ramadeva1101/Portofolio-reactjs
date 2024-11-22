import React, { useState, useRef } from 'react';
import { Mail, Loader2 } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        fullName: formData.get('fullName')?.toString().trim(),
        email_id: formData.get('email_id')?.toString().trim(),
        message: formData.get('message')?.toString().trim(),
      };

      console.log('Submitting form data:', data);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);

      const result = await response.text();
      console.log('Raw response:', result);

      let jsonResult;
      try {
        jsonResult = JSON.parse(result);
      } catch (error) {
        console.error('Failed to parse JSON:', error);
        throw new Error('Invalid server response');
      }

      if (!response.ok) {
        throw new Error(jsonResult.error || 'Gagal mengirim pesan');
      }

      console.log('Success response:', jsonResult);
      setStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Terjadi kesalahan, silakan coba lagi'
      );
    } finally {
      setLoading(false);
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
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
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                minLength={2}
                maxLength={50}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="email_id" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email_id"
                id="email_id"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="your.email@example.com"
                disabled={loading}
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
                minLength={10}
                maxLength={500}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="Your message here..."
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 12.414 10.293 13.707a1 1 0 001.414 0L15 10.414 16.293 9.121a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;