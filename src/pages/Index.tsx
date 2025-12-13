import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const stairTypes = [
    {
      id: 'kosoour',
      title: 'Косоур',
      description: 'Классическая конструкция с центральной несущей балкой',
      image: 'https://cdn.poehali.dev/files/e31e4daa-87f6-4a35-9af8-f554528e3eeb.jpg'
    },
    {
      id: 'monokosoour',
      title: 'Монокосоур',
      description: 'Современный дизайн с единой центральной опорой',
      image: 'https://cdn.poehali.dev/files/8641dde5-f8ec-41aa-ac9e-2070db526870.jpg'
    },
    {
      id: 'spiral',
      title: 'Винтовые',
      description: 'Элегантное решение для экономии пространства',
      image: 'https://cdn.poehali.dev/files/b4d13b5e-1b7f-42ce-a5b7-7d2a6eaf4d0d.jpg'
    },
    {
      id: 'tetiva',
      title: 'Тетива',
      description: 'Традиционная конструкция с боковыми несущими элементами',
      image: 'https://cdn.poehali.dev/files/4d00b8fe-5e18-4c69-b774-822bf71cbd33.jpg'
    },
    {
      id: 'cladding',
      title: 'Облицовка ступеней',
      description: 'Преображение существующих лестниц премиальными материалами',
      image: 'https://cdn.poehali.dev/files/6616496b-f252-4045-8577-5c6f71388fcd.jpg'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Индивидуальный проект',
      description: 'Разрабатываем уникальный дизайн под ваш интерьер'
    },
    {
      icon: 'Wrench',
      title: 'Собственное производство',
      description: 'Полный контроль качества на всех этапах'
    },
    {
      icon: 'Users',
      title: 'Работа с клиентом',
      description: 'Обсуждаем каждую деталь на всех этапах проекта'
    },
    {
      icon: 'Clock',
      title: 'Быстрая реализация',
      description: 'От проекта до установки в оптимальные сроки'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Используем только премиальные материалы'
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/files/e31e4daa-87f6-4a35-9af8-f554528e3eeb.jpg',
    'https://cdn.poehali.dev/files/8641dde5-f8ec-41aa-ac9e-2070db526870.jpg',
    'https://cdn.poehali.dev/files/b4d13b5e-1b7f-42ce-a5b7-7d2a6eaf4d0d.jpg'
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/files/e31e4daa-87f6-4a35-9af8-f554528e3eeb.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center animate-fade-in px-4">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Премиум лестницы<br />на заказ
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Индивидуальное проектирование и изготовление лестниц из элитных материалов
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <Link to="/contacts">Получить консультацию</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">О компании Luxe Stairs</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы создаём лестницы, которые становятся центральным элементом интерьера. 
              Каждый проект — это результат тщательной работы наших мастеров и дизайнеров. 
              Используем только качественные материалы и проверенные технологии для создания 
              конструкций, которые прослужат десятилетия.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/about">Подробнее о нас</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Типы лестниц</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stairTypes.map((type) => (
              <Link to={`/stairs/${type.id}`} key={type.id}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 mx-0 rounded-sm"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-2">{type.title}</h4>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Галерея работ</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-80 overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={image}
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/gallery">Смотреть все работы</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Наши преимущества</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={32} className="text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-3">{advantage.title}</h4>
                <p className="text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Свяжитесь с нами</h3>
          <p className="text-xl mb-8 opacity-90">
            Обсудим ваш проект и подберём оптимальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+79295406865" className="flex items-center gap-2 text-lg hover:text-accent transition-colors">+7 (929) 540 68-65</a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:zakaz.mebel2009@yandex.ru" className="flex items-center gap-2 text-lg hover:text-accent transition-colors">zakaz.mebel2009@yandex.ru</a>
          </div>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contacts">Оставить заявку</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;