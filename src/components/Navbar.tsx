
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/cards', label: 'Card Library', icon: <Library size={18} /> },
    { path: '/reading', label: 'Oracle Reading', icon: <BookOpen size={18} /> },
  ];
  
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-serif font-semibold text-oracle-mystical">Oracle of the Hypogeum</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? 'default' : 'ghost'}
              size="sm"
              asChild
              className={location.pathname === item.path ? 'bg-oracle-mystical hover:bg-oracle-mystical/90' : ''}
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
                className={location.pathname === item.path ? 'bg-oracle-mystical hover:bg-oracle-mystical/90' : ''}
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
