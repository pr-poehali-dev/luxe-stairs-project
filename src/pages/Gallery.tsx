import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const galleryImages = [
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2d94bd56-8fb0-4205-a8b6-fb2f8c294ea9.jpg',
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/a01b832e-fc72-455f-92ec-fa0768e0d12c.jpg',
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2149fd21-7efe-4180-80da-f1a6803046a3.jpg',
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2d94bd56-8fb0-4205-a8b6-fb2f8c294ea9.jpg',
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/a01b832e-fc72-455f-92ec-fa0768e0d12c.jpg',
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2149fd21-7efe-4180-80da-f1a6803046a3.jpg',
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2d94bd56-8fb0-4205-a8b6-fb2f8c294ea9.jpg',
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/a01b832e-fc72-455f-92ec-fa0768e0d12c.jpg',
    'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2149fd21-7efe-4180-80da-f1a6803046a3.jpg'
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
            Галерея наших работ
          </h1>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Каждый проект уникален и создан с любовью к деталям
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative h-96 overflow-hidden rounded-lg group cursor-pointer shadow-md hover:shadow-2xl transition-all"
              >
                <img
                  src={image}
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">Проект {index + 1}</p>
                    <p className="text-sm opacity-90">Премиум лестница</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
