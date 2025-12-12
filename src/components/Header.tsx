import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-6 border-b">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-light tracking-widest text-foreground">
              LS
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-light tracking-wide text-foreground">
                Luxe Stairs
              </h1>
              <p className="text-sm text-muted-foreground">
                Стиль и Качество
              </p>
            </div>
          </Link>
          
          <nav className="flex gap-16 text-base">
            <Link
              to="/"
              className={`transition-colors hover:text-accent ${
                isActive('/') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-accent ${
                isActive('/about') ? 'text-accent' : 'text-foreground'
              }`}
            >
              О нас
            </Link>
            <Link
              to="/stairs"
              className={`transition-colors hover:text-accent ${
                isActive('/stairs') || location.pathname.startsWith('/stairs/') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Лестницы
            </Link>
            <Link
              to="/contacts"
              className={`transition-colors hover:text-accent ${
                isActive('/contacts') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;