import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const Gallery = () => {
  const galleryImages = [
    'https://cdn.poehali.dev/files/e31e4daa-87f6-4a35-9af8-f554528e3eeb.jpg',
    'https://cdn.poehali.dev/files/8641dde5-f8ec-41aa-ac9e-2070db526870.jpg',
    'https://cdn.poehali.dev/files/b4d13b5e-1b7f-42ce-a5b7-7d2a6eaf4d0d.jpg',
    'https://cdn.poehali.dev/files/4d00b8fe-5e18-4c69-b774-822bf71cbd33.jpg',
    'https://cdn.poehali.dev/files/6616496b-f252-4045-8577-5c6f71388fcd.jpg',
    'https://cdn.poehali.dev/files/e31e4daa-87f6-4a35-9af8-f554528e3eeb.jpg',
    'https://cdn.poehali.dev/files/8641dde5-f8ec-41aa-ac9e-2070db526870.jpg',
    'https://cdn.poehali.dev/files/b4d13b5e-1b7f-42ce-a5b7-7d2a6eaf4d0d.jpg',
    'https://cdn.poehali.dev/files/4d00b8fe-5e18-4c69-b774-822bf71cbd33.jpg'
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
      <ChatWidget />
    </div>
  );
};

export default Gallery;