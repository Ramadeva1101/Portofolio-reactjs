import React, { useState, useRef } from 'react';
import { Mail, Loader2, CheckCircle2, XCircle } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    
    try {
      const formData = new FormData(formRef.current!);
      const response = await fetch("https://formsubmit.co/ajax/ramadeva1101@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      setStatus('success');
      if (formRef.current) formRef.current.reset();
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      setStatus('error');
      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Hubungi Saya
          </h2>
          <p className="text-gray-600">
            Punya pertanyaan atau ingin bekerja sama? Kirim pesan!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 relative"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Pesan Baru dari Website" />

            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="email@anda.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pesan
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-300"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Mail className="w-5 h-5" />
              )}
              {loading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>

            {/* Status Messages with Animation */}
            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5" />
                <span>Pesan berhasil dikirim! Terima kasih telah menghubungi kami.</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 animate-fadeIn">
                <XCircle className="w-5 h-5" />
                <span>Maaf, terjadi kesalahan. Silakan coba lagi nanti.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;