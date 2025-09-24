import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card shadow-neon-cyan' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold neon-text">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-neon-cyan transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-primary-foreground"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;