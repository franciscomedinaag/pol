import { Mail, Instagram, Facebook, Send, PhoneCallIcon } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', handle: '@polgaynor', color: 'pink', url: 'https://www.instagram.com/polgaynor' },
    { icon: Facebook, name: 'Facebook', handle: 'Pöl Gaynor', color: 'blue', url: 'https://www.facebook.com/polgaynor' },
    { icon: Mail, name: 'Email', handle: 'polgaynor@gmail.com', color: 'pink', url: 'mailto:polgaynor@gmail.com' },
    { icon: PhoneCallIcon, name: 'Teléfono', handle: '+52 1 612 158 7255', color: 'blue', url: 'tel:+5216121587255' },
  ];

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-gradient-to-b from-black via-pink-950/30 to-black">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid gap-12 text-center">
          {/* Left Side - Contact Info */}
          <div className="max-w-[600px] mx-auto">
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
                  <a
                    key={index}
                    href={social.url}
                    target={social.url && !social.url.startsWith('mailto:') ? '_blank' : undefined}
                    rel={social.url && !social.url.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
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
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}