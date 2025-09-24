import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 7665024109',
      href: 'tel:+917665024109'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'sourabh.chouhan.9048@gmail.com',
      href: 'mailto:sourabh.chouhan.9048@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      href: '#'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: '@sourabhchouhan1',
      href: 'https://github.com/sourabhchouhan1'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 neon-text">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, 
              innovative projects, and ways to collaborate. Whether you have 
              a project in mind or just want to connect, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center p-4 glass-card rounded-xl hover:shadow-neon-cyan transition-all duration-300 group"
                >
                  <div className="text-neon-cyan mr-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{contact.label}</p>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 neon-text">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-8">
              I'm currently available for new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full bg-neon-cyan text-primary-foreground hover:shadow-neon-cyan transition-all duration-300"
                onClick={() => window.open('mailto:sourabh.chouhan.9048@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © Sourabh Singh Chouhan. Built with React, TypeScript and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
