import { Music as MusicIcon, Play, ExternalLink } from 'lucide-react';

export function Music() {
  const releases = [
    {
      title: 'Neón y Terciopelo',
      type: 'Álbum',
      year: '2024',
      description: 'Una explosión de color sonoro que fusiona el glam clásico con beats contemporáneos.',
      color: 'from-pink-600 to-pink-400',
    },
    {
      title: 'Luces de la Ciudad',
      type: 'EP',
      year: '2023',
      description: 'Cinco canciones que capturan la esencia de las noches urbanas llenas de energía.',
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      title: 'Brillar',
      type: 'Single',
      year: '2023',
      description: 'El himno de autoaceptación y celebración que definió una generación.',
      color: 'from-pink-600 to-cyan-600',
    },
  ];

  const platforms = [
    { name: 'Spotify', icon: '🎵' },
    { name: 'Apple Music', icon: '🍎' },
    { name: 'YouTube', icon: '▶️' },
    { name: 'SoundCloud', icon: '☁️' },
  ];

  return (
    <section id="musica" className="relative py-24 md:py-32 bg-gradient-to-b from-black via-cyan-950/20 to-black">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-pink-500 mb-4 font-bold">
            Música
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Mis Lanzamientos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explora mi catálogo de música original
          </p>
        </div>

        {/* Releases Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {releases.map((release, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 border-4 border-zinc-800 overflow-hidden hover:border-pink-500 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${release.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border-2 border-pink-500">
                  <MusicIcon className="w-8 h-8 text-pink-400" />
                </div>

                {/* Type & Year */}
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 uppercase tracking-wider font-bold">
                  <span>{release.type}</span>
                  <span>•</span>
                  <span>{release.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-pink-400 transition-colors uppercase">
                  {release.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {release.description}
                </p>

                {/* Play Button */}
                <button className="flex items-center gap-2 text-pink-400 hover:text-cyan-400 transition-colors uppercase tracking-wider text-sm font-bold group/btn">
                  <Play className="w-4 h-4" />
                  <span>Escuchar</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="text-center">
          <h3 className="text-2xl font-black uppercase tracking-wider mb-8 text-white">
            Disponible en
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <button
                key={index}
                className="group px-8 py-4 bg-zinc-900 border-4 border-zinc-800 hover:border-cyan-400 transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
              >
                <span className="text-2xl">{platform.icon}</span>
                <span className="text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wider font-bold">
                  {platform.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}