import logoGaynor from '../../assets/LOGOGAYNOR.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-4 border-pink-500 py-12">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img 
              src={logoGaynor} 
              alt="Pöl Gaynor Logo" 
              className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
            />
            <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mt-4 font-bold">
              Glam • Pop • Rock
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wider">
            <button
              onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-pink-400 transition-colors font-bold"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => document.getElementById('musica')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-cyan-400 transition-colors font-bold"
            >
              Música
            </button>
            <button
              onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-pink-400 transition-colors font-bold"
            >
              Galería
            </button>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-cyan-400 transition-colors font-bold"
            >
              Contacto
            </button>
          </nav>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 font-bold">
            © {currentYear} Pöl Gaynor. Todos los derechos reservados.
          </p>

          {/* Additional Info */}
          <p className="text-xs text-gray-600 max-w-md">
            Sitio web diseñado para la experiencia completa del glam rock mexicano.
          </p>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-gradient-to-t from-pink-500/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none"></div>
    </footer>
  );
}