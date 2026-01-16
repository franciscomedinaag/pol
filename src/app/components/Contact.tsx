import { Mail, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', handle: '@polgaynor', color: 'pink' },
    { icon: Facebook, name: 'Facebook', handle: 'Pöl Gaynor', color: 'blue' },
    { icon: Twitter, name: 'Twitter', handle: '@polgaynor', color: 'pink' },
    { icon: Mail, name: 'Email', handle: 'contact@polgaynor.com', color: 'blue' },
  ];

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-gradient-to-b from-black via-pink-950/30 to-black">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-cyan-400 mb-4 font-bold">
              Contacto
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-8">
              Hablemos
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              ¿Interesado en colaboraciones, contrataciones o simplemente quieres saludar? 
              Estoy siempre abierto a nuevas oportunidades y conexiones.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const isPink = social.color === 'pink';
                return (
                  <button
                    key={index}
                    className={`group w-full flex items-center gap-4 p-4 bg-zinc-900 border-4 border-zinc-800 hover:border-${social.color}-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                    style={{
                      ['--hover-border' as any]: isPink ? '#ec4899' : '#06b6d4'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = isPink ? '#ec4899' : '#06b6d4';
                      e.currentTarget.style.boxShadow = isPink 
                        ? '0 0 30px rgba(236,72,153,0.4)' 
                        : '0 0 30px rgba(6,182,212,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#27272a';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
                    }}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${isPink ? 'from-pink-500/20 to-pink-500/10 border-2 border-pink-500/30' : 'from-cyan-500/20 to-cyan-500/10 border-2 border-cyan-500/30'}`}>
                      <Icon className={`w-6 h-6 ${isPink ? 'text-pink-400' : 'text-cyan-400'}`} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                        {social.name}
                      </div>
                      <div className={`text-white transition-colors`}>
                        {social.handle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider text-pink-400 mb-2 font-bold">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-800 text-white focus:border-pink-500 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wider text-cyan-400 mb-2 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-800 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wider text-pink-400 mb-2 font-bold">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-800 text-white focus:border-pink-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame más..."
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-cyan-500 hover:from-pink-500 hover:to-cyan-400 transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2 font-black shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}