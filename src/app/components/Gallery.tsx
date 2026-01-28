import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

import image1 from '../../assets/image_1.jpeg';
import image2 from '../../assets/image_2.jpeg';
import image3 from '../../assets/image_3.jpeg';
import image4 from '../../assets/image_4.jpeg';
import image5 from '../../assets/image_5.jpeg';
import image6 from '../../assets/image_6.jpeg';
import image7 from '../../assets/image_7.jpeg';
import image8 from '../../assets/image_8.jpeg';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: image1,
      alt: 'Pöl Gaynor',
      title: 'Pöl Gaynor',
    },
    {
      src: image2,
      alt: 'Pöl Gaynor',
      title: 'Pöl Gaynor',
    },
    {
      src: image3,
      alt: 'Pöl Gaynor',
      title: 'Pöl Gaynor',
    },
    {
      src: image4,
      alt: 'Pöl Gaynor',
      title: 'Pöl Gaynor',
    },
    {
      src: image5,
      alt: 'Pöl Gaynor',
      title: 'Pöl Gaynor',
    },
    {
      src: image6,
      alt: 'Pöl Gaynor',
      title: 'Pöl Gaynor',
    },
    {
      src: image7,
      alt: 'Pöl Gaynor',
      title: 'Pöl Gaynor',
    },
    {
      src: image8,
      alt: 'Pöl Gaynor',
      title: 'Pöl Gaynor',
    }
  ];

  return (
    <section id="galeria" className="relative py-24 md:py-32 bg-black">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-pink-400 mb-4">
            Galería
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Momentos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Una mirada detrás del escenario
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-pink-500 to-pink-600 p-1">
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-xl font-black uppercase tracking-wider text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl hover:text-pink-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="max-w-6xl w-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <p className="text-center text-white mt-4 text-xl">
                {images[selectedImage].title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}