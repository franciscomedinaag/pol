import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import logoGaynor from '../../assets/LOGOGAYNOR.png';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hot Pink Background with Spiral Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-pink-500 to-pink-600"></div>
      
      {/* Spiral Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 35%, transparent 35%, transparent 60%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.1) 65%, transparent 65%)`,
          backgroundSize: '400px 400px',
          animation: 'spin 20s linear infinite'
        }}
      ></div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-cyan-400 blur-[100px] opacity-50 animate-pulse"></div>
            <img
              src={logoGaynor}
              alt="Pöl Gaynor Logo"
              className="relative z-10 h-64 md:h-96 lg:h-[28rem] w-auto object-contain drop-shadow-[0_0_80px_rgba(0,255,255,0.9)]"
            />
          </div>

          {/* Main Title - Removed since logo contains the name */}
          <div className="mb-8">
            <span className="block text-xl md:text-3xl tracking-[0.3em] uppercase text-cyan-300 drop-shadow-lg font-black">
              Glam • Pop • Rock
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl max-w-2xl mb-12 text-white font-bold leading-relaxed drop-shadow-lg">
            La energía del glam rock mexicano
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('musica');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 bg-black hover:bg-cyan-500 transition-all duration-300 uppercase tracking-widest font-black text-white border-4 border-black hover:border-cyan-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                Escucha Mi Música
              </span>
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 border-4 border-white bg-transparent hover:bg-white hover:text-pink-600 text-white transition-all duration-300 uppercase tracking-widest font-black"
            >
              <span className="relative z-10">Contáctame</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}