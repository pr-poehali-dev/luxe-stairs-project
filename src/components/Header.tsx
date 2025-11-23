import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          
          <div className="flex flex-col items-center">
            <Link to="/" className="flex flex-col items-center group">
              <h1 className="text-4xl font-bold text-primary tracking-wider mb-1">
                Luxe Stairs
              </h1>
              <p className="text-sm text-muted-foreground italic">
                быстро и качественно
              </p>
            </Link>
            <nav className="flex gap-8 mt-4">
              <Link
                to="/"
                className={`text-sm transition-colors hover:text-accent ${
                  isActive('/') ? 'text-accent font-medium' : 'text-foreground'
                }`}
              >
                Главная
              </Link>
              <Link
                to="/about"
                className={`text-sm transition-colors hover:text-accent ${
                  isActive('/about') ? 'text-accent font-medium' : 'text-foreground'
                }`}
              >
                О нас
              </Link>
              <Link
                to="/gallery"
                className={`text-sm transition-colors hover:text-accent ${
                  isActive('/gallery') ? 'text-accent font-medium' : 'text-foreground'
                }`}
              >
                Галерея
              </Link>
              <Link
                to="/contacts"
                className={`text-sm transition-colors hover:text-accent ${
                  isActive('/contacts') ? 'text-accent font-medium' : 'text-foreground'
                }`}
              >
                Контакты
              </Link>
            </nav>
          </div>

          <div className="flex-1 flex flex-col items-end gap-1">
            <a href="tel:+71111111111" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
              <Icon name="Phone" size={16} />
              +7 111 111 11 11
            </a>
            <a href="mailto:1234d@gmail.com" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
              <Icon name="Mail" size={16} />
              1234d@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
