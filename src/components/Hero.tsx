import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-bg-new.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Full Stack Developer & Problem Solver';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 whitespace-nowrap">
            <span className="gradient-text">Sourabh Singh Chouhan</span>
          </h1>
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl neon-text font-mono">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Jaipur, Rajasthan</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>sourabh.chouhan.9048@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>@sourabhchouhan1</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg"
            className="bg-neon-cyan text-primary-foreground hover:shadow-neon-cyan transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-primary-foreground"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown 
            className="w-8 h-8 text-neon-cyan mx-auto cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;