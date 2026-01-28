import { Play, ExternalLink } from 'lucide-react';
import cover1 from '../../assets/cancion_1.PNG';
import cover2 from '../../assets/cancion_2.PNG';
import cover3 from '../../assets/cancion_3.PNG';

export function Music() {
  const releases = [
    {
      title: 'Señorita Tentación',
      type: 'Single',
      year: '2022',
      color: 'from-pink-600 to-pink-400',
      url: 'https://www.youtube.com/watch?v=REjDb0g7Fys',
      image: cover1,
    },
    {
      title: `Life's a Beach`,
      type: 'Single',
      year: '2025',
      color: 'from-cyan-600 to-cyan-400',
      url: 'https://www.youtube.com/watch?v=u8ih5g7cNvY',
      image: cover2
    },
    {
      title: 'The Way',
      type: 'Single',
      year: '2021',
      color: 'from-pink-600 to-cyan-600',
      url: 'https://www.youtube.com/watch?v=moXIkcowfp4',
      image: cover3,
    },
  ];

  const platforms = [
    { name: 'Spotify', icon: '🎵', url: 'https://open.spotify.com/intl-es/artist/1aP2neFeDsxfhkirx0IWQd?si=pn0AuFLTToizpYkx_2rUDA' },
    { name: 'Apple Music', icon: '🍎', url: 'https://music.apple.com/us/artist/p%C3%B6l-gaynor/1488459265' },
    { name: 'YouTube', icon: '▶️', url: 'https://www.youtube.com/@polgaynor7626' },
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
            <a
              key={index}
              href={release.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${release.title} en nueva pestaña`}
              className="group block relative bg-zinc-900 border-4 border-zinc-800 overflow-hidden hover:border-pink-500 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${release.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Cover Image */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border-2 border-pink-500 overflow-hidden rounded">
                  <img src={release.image} alt={release.title} className="w-12 h-12 object-cover rounded" />
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

                {/* Play + External Link */}
                <div className="flex items-center gap-2 text-pink-400 hover:text-cyan-400 transition-colors uppercase tracking-wider text-sm font-bold group">
                  <button
                    className="flex items-center gap-2"
                    aria-label={`Reproducir ${release.title}`}
                  >
                    <Play className="w-4 h-4" />
                    <span>Escuchar</span>
                  </button>
                  <span className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="text-center">
          <h3 className="text-2xl font-black uppercase tracking-wider mb-8 text-white">
            Disponible en
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-zinc-900 border-4 border-zinc-800 hover:border-cyan-400 transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
              >
                <span className="text-2xl">{platform.icon}</span>
                <span className="text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wider font-bold">
                  {platform.name}
                </span>
                <ExternalLink className="w-4 h-4 ml-2 text-gray-400 opacity-80 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}