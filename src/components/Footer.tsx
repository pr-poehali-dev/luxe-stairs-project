import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Luxe Stairs</h3>
            <p className="text-sm opacity-90 italic">быстро и качественно</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <a href="tel:+79296251892" className="flex items-center gap-2 hover:text-accent transition-colors">+7 (929) 540 68-65</a>
              <a href="mailto:zakaz.mebel2009@yandex.ru" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Icon name="Mail" size={16} />
                zakaz.mebel2009@yandex.ru
              </a>
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                г. Москва
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в социальных сетях</h4>
            <div className="flex gap-4">
              <a
                href="https://t.me/+79296251892"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                title="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="https://wa.me/79296251892"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                title="WhatsApp"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="mailto:zakaz.mebel2009@yandex.ru"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                title="Email"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="tel:+79296251892"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                title="Позвонить"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          © {new Date().getFullYear()} Luxe Stairs. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;