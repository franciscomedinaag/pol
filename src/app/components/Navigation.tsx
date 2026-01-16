import { useState, useEffect } from 'react';
import logoGaynor from '../../assets/LOGOGAYNOR.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm py-3' : 'bg-black/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="relative group cursor-pointer"
        >
          <img 
            src={logoGaynor} 
            alt="Pöl Gaynor Logo" 
            className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'} w-auto object-contain drop-shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]`}
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="relative group text-sm tracking-widest uppercase hover:text-pink-400 transition-colors font-bold"
          >
            Sobre Mí
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('musica')}
            className="relative group text-sm tracking-widest uppercase hover:text-cyan-400 transition-colors font-bold"
          >
            Música
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('galeria')}
            className="relative group text-sm tracking-widest uppercase hover:text-pink-400 transition-colors font-bold"
          >
            Galería
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="relative group text-sm tracking-widest uppercase hover:text-cyan-400 transition-colors font-bold"
          >
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black/98 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-2xl tracking-widest uppercase hover:text-pink-400 transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('musica')}
              className="text-2xl tracking-widest uppercase hover:text-blue-400 transition-colors"
            >
              Música
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-2xl tracking-widest uppercase hover:text-pink-400 transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-2xl tracking-widest uppercase hover:text-blue-400 transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}