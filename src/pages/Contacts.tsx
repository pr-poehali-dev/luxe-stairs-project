import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
            Свяжитесь с нами
          </h1>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Мы ответим на все ваши вопросы и поможем выбрать идеальное решение
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8">Оставьте заявку</h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">Контактная информация</h2>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Телефон</h3>
                    <a href="tel:+79295406865" className="text-muted-foreground hover:text-accent transition-colors">
                      +7 (929) 540 68-65
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ежедневно с 9:00 до 21:00
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:zakaz.mebel2009@yandex.ru" className="text-muted-foreground hover:text-accent transition-colors">
                      zakaz.mebel2009@yandex.ru
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ответим в течение 24 часов
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Производство и офис продаж
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground">
                <h3 className="font-semibold mb-4">Мы в мессенджерах</h3>
                <div className="flex gap-4">
                  <a
                    href="https://t.me/+79295406865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                    title="Telegram"
                  >
                    <Icon name="Send" size={24} />
                  </a>
                  <a
                    href="https://wa.me/79295406865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                    title="WhatsApp"
                  >
                    <Icon name="MessageCircle" size={24} />
                  </a>
                  <a
                    href="mailto:zakaz.mebel2009@yandex.ru"
                    className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                    title="Email"
                  >
                    <Icon name="Mail" size={24} />
                  </a>
                  <a
                    href="tel:+79295406865"
                    className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                    title="Позвонить"
                  >
                    <Icon name="Phone" size={24} />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Contacts;