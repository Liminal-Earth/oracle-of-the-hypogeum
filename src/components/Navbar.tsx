
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} className="text-oracle-gold" /> },
    { path: '/cards', label: 'Card Library', icon: <Library size={18} className="text-oracle-gold" /> },
    { path: '/reading', label: 'Oracle Reading', icon: <BookOpen size={18} className="text-oracle-gold" /> },
  ];
  
  return (
    <header className="sticky top-0 z-10 bg-oracle-black/80 backdrop-blur-md border-b border-oracle-gold/20">
      <div className="container flex items-center justify-between h-16 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 flex items-center justify-center border border-oracle-gold rounded-full group-hover:shadow-gold-glow transition-shadow duration-300">
            <span className="text-oracle-gold text-lg">⚭</span>
          </div>
          <span className="text-xl font-serif font-semibold shimmer-text">Oracle of the Hypogeum</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? 'default' : 'ghost'}
              size="sm"
              asChild
              className={location.pathname === item.path ? 'bg-oracle-mystical border border-oracle-gold/50 hover:bg-oracle-mystical/90 text-oracle-gold shadow-gold-glow' : 'text-oracle-gold hover:bg-oracle-mystical/30'}
            >
              <Link to={item.path} className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        
        <div className="md:hidden flex">
          <div className="flex space-x-1">
            {navItems.map(item => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? 'default' : 'ghost'}
                size="icon"
                asChild
                className={location.pathname === item.path ? 'bg-oracle-mystical border border-oracle-gold/50 hover:bg-oracle-mystical/90 text-oracle-gold shadow-gold-glow' : 'text-oracle-gold hover:bg-oracle-mystical/30'}
              >
                <Link to={item.path}>
                  {item.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
