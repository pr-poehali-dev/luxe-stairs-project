import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const StairType = () => {
  const { type } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const stairData: Record<string, any> = {
    kosoour: {
      title: 'Лестница на косоуре',
      shortDescription: 'Классическая конструкция с центральной несущей балкой',
      fullDescription: 'Лестница на косоуре — это проверенное временем решение, сочетающее надёжность и элегантность. Центральная несущая балка обеспечивает прочность конструкции, а открытые ступени создают ощущение лёгкости. Идеально подходит для помещений с классическим и современным дизайном.',
      whoFor: 'Владельцам загородных домов и коттеджей, которые ценят традиционные решения с современным исполнением. Подходит для помещений с высокими потолками.',
      lifespan: 'Срок службы: более 30 лет при правильной эксплуатации',
      images: [
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2d94bd56-8fb0-4205-a8b6-fb2f8c294ea9.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/a01b832e-fc72-455f-92ec-fa0768e0d12c.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2149fd21-7efe-4180-80da-f1a6803046a3.jpg'
      ]
    },
    monokosoour: {
      title: 'Лестница на монокосоуре',
      shortDescription: 'Современный дизайн с единой центральной опорой',
      fullDescription: 'Монокосоур — это вершина инженерной мысли и дизайна. Единая центральная балка создаёт эффект парящих ступеней, придавая интерьеру воздушность и современность. Конструкция требует точных расчётов и профессионального исполнения.',
      whoFor: 'Ценителям современного минимализма и нестандартных решений. Идеально для просторных холлов и гостиных с панорамными окнами.',
      lifespan: 'Срок службы: более 25 лет при соблюдении технологии монтажа',
      images: [
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2149fd21-7efe-4180-80da-f1a6803046a3.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2d94bd56-8fb0-4205-a8b6-fb2f8c294ea9.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/a01b832e-fc72-455f-92ec-fa0768e0d12c.jpg'
      ]
    },
    spiral: {
      title: 'Винтовая лестница',
      shortDescription: 'Элегантное решение для экономии пространства',
      fullDescription: 'Винтовая лестница — произведение искусства, которое экономит пространство не в ущерб эстетике. Плавные изгибы и изящная конструкция делают её центральным элементом интерьера. Каждая ступень крепится к центральному столбу, создавая впечатление спирали.',
      whoFor: 'Владельцам компактных пространств, таунхаусов и двухуровневых квартир. Для тех, кто хочет сделать лестницу акцентом интерьера.',
      lifespan: 'Срок службы: более 30 лет благодаря прочной центральной опоре',
      images: [
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/a01b832e-fc72-455f-92ec-fa0768e0d12c.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2149fd21-7efe-4180-80da-f1a6803046a3.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2d94bd56-8fb0-4205-a8b6-fb2f8c294ea9.jpg'
      ]
    },
    tetiva: {
      title: 'Лестница на тетиве',
      shortDescription: 'Традиционная конструкция с боковыми несущими элементами',
      fullDescription: 'Лестница на тетиве — классика, проверенная веками. Две боковые балки скрывают торцы ступеней, создавая монолитный и элегантный вид. Эта конструкция отличается особой прочностью и позволяет реализовать самые смелые дизайнерские решения.',
      whoFor: 'Поклонникам классического стиля и проверенных решений. Подходит для помещений любого размера и назначения.',
      lifespan: 'Срок службы: более 35 лет — самая долговечная конструкция',
      images: [
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2d94bd56-8fb0-4205-a8b6-fb2f8c294ea9.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2149fd21-7efe-4180-80da-f1a6803046a3.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/a01b832e-fc72-455f-92ec-fa0768e0d12c.jpg'
      ]
    },
    cladding: {
      title: 'Облицовка ступеней',
      shortDescription: 'Преображение существующих лестниц премиальными материалами',
      fullDescription: 'Облицовка ступеней — это способ дать новую жизнь существующей лестнице. Мы преображаем бетонные, металлические или деревянные конструкции, используя премиальные материалы. Результат — эстетика новой лестницы при сохранении прочной основы.',
      whoFor: 'Владельцам домов с готовыми лестницами, которые хотят обновить интерьер без капитальной перестройки. Экономичное решение для быстрого преображения.',
      lifespan: 'Срок службы облицовки: 15-20 лет в зависимости от материала',
      images: [
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2149fd21-7efe-4180-80da-f1a6803046a3.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/a01b832e-fc72-455f-92ec-fa0768e0d12c.jpg',
        'https://cdn.poehali.dev/projects/a5847194-2e0e-4567-a4c9-effc90f6d0d9/files/2d94bd56-8fb0-4205-a8b6-fb2f8c294ea9.jpg'
      ]
    }
  };

  const currentStair = stairData[type || 'kosoour'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentStair.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentStair.images.length) % currentStair.images.length);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              {currentStair.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {currentStair.shortDescription}
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={currentStair.images[0]}
                  alt={currentStair.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {currentStair.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-accent/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Users" size={28} className="text-accent" />
                  Кому подойдёт
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentStair.whoFor}
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={28} className="text-accent" />
                  Надёжность
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentStair.lifespan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Галерея проектов</h2>
            <div className="relative">
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={currentStair.images[currentImageIndex]}
                  alt={`${currentStair.title} - фото ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={prevImage}
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={nextImage}
              >
                <Icon name="ChevronRight" size={24} />
              </Button>
              <div className="flex justify-center gap-2 mt-4">
                {currentStair.images.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-accent w-8' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Оставьте заявку</h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Мы свяжемся с вами для обсуждения деталей проекта
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Контактная информация</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
            <a href="tel:+71111111111" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Icon name="Phone" size={20} />
              +7 111 111 11 11
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:1234d@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Icon name="Mail" size={20} />
              1234d@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              г. Москва
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StairType;
