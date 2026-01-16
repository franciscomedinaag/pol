import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import grupo3 from '../../assets/380e6e817931465447714ece5cca3d28d5a6c4e6.png';

export function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32 bg-gradient-to-b from-black via-pink-950/30 to-black">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-600/30 to-pink-600/30 blur-3xl"></div>
            <div className="relative aspect-[4/3] overflow-hidden border-4 border-pink-500 shadow-[0_0_50px_rgba(236,72,153,0.5)]">
              <img
                src={grupo3}
                alt="Pöl Gaynor y su grupo en vivo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2">
            <h2 className="mb-8">
              <span className="block text-sm tracking-[0.3em] uppercase text-cyan-400 mb-4 font-bold">
                Sobre Mí
              </span>
              <span className="block text-5xl md:text-7xl font-black tracking-tighter uppercase text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                La Voz del
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Glam Rock
                </span>
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Pöl Gaynor es la energía vibrante del glam rock mexicano, fusionando la teatralidad del glam con la intensidad del pop y rock contemporáneo.
              </p>
              
              <p>
                Con una presencia escénica inigualable y una estética visual que desafía los límites, Pöl Gaynor trae una nueva era de expresión artística a la escena musical mexicana.
              </p>

              <p>
                Cada presentación es una experiencia única donde la música, el arte visual y la performance se encuentran en un espectáculo de luces neón, energía pura y autenticidad sin filtros.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-6 py-3 border-4 border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                <span className="text-2xl font-black text-cyan-400">GLAM</span>
              </div>
              <div className="px-6 py-3 border-4 border-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                <span className="text-2xl font-black text-pink-500">POP</span>
              </div>
              <div className="px-6 py-3 border-4 border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                <span className="text-2xl font-black text-cyan-400">ROCK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}