import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const advantages = [
    {
      icon: 'Calendar',
      title: 'Опыт более 10 лет',
      description: 'За годы работы мы создали сотни уникальных проектов для самых требовательных клиентов. Наш опыт позволяет предвидеть все нюансы и избегать типичных ошибок.'
    },
    {
      icon: 'Gem',
      title: 'Премиальные материалы',
      description: 'Работаем только с проверенными поставщиками элитной древесины, металла и стекла. Каждый материал имеет сертификаты качества и проходит тщательный отбор.'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Каждый проект уникален. Мы учитываем особенности вашего интерьера, образ жизни и личные предпочтения, создавая лестницу специально для вас.'
    },
    {
      icon: 'Hammer',
      title: 'Собственное производство',
      description: 'Полный производственный цикл на нашей площадке. Это гарантирует качество, соблюдение сроков и возможность контроля на каждом этапе.'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 5 лет',
      description: 'Мы настолько уверены в качестве наших изделий, что даём расширенную гарантию. Бесплатное сервисное обслуживание и консультации на весь срок эксплуатации.'
    },
    {
      icon: 'Clock',
      title: 'Соблюдение сроков',
      description: 'Чёткое планирование и отлаженные процессы позволяют нам выполнять проекты точно в срок. Вы всегда знаете, на каком этапе находится ваш заказ.'
    }
  ];

  const galleryImages = [
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

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 animate-fade-in">
              О компании Luxe Stairs
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Добро пожаловать в мир премиальных лестниц! Мы — команда профессионалов, 
                влюблённых в своё дело. Каждая наша работа — это произведение искусства, 
                созданное с любовью к деталям и безупречным вниманием к качеству.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Более 10 лет мы создаём лестницы, которые служат не просто функциональным 
                элементом, но становятся душой интерьера. Наши мастера — это художники, 
                инженеры и ремесленники в одном лице. Они знают каждый секрет работы с 
                деревом, металлом и стеклом.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы работаем только с самыми качественными материалами — элитными породами 
                древесины, закалённым стеклом, нержавеющей сталью. Каждый материал проходит 
                строгий контроль качества. Используем современные технологии обработки и 
                традиционные методы ручной работы там, где это необходимо.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={advantage.icon as any} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Примеры наших работ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-80 overflow-hidden rounded-lg group">
                <img
                  src={image}
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами для обсуждения проекта
          </p>
          <ContactForm />
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

export default About;
