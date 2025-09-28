import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Role-Based Admin Dashboard',
      duration: 'Sep 2024 - Dec 2024',
      description: 'Developed a comprehensive full-stack dashboard using React.js and Node.js with role-based access control for Admin, Accountant, and Customer roles.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Clerk Auth'],
      features: [
        'Secure authentication with Clerk',
        'Role-based access control',
        'User management for admins',
        'Transaction handling for accountants',
        'Customer data visualization'
      ],
      links: {
        github: 'https://github.com/sourabhchouhan1/RollBased-Office-Management-System',
        live: https://officexmangement.vercel.app/login'
      }
    },
    {
      title: 'WhatsApp Bot for Bill Automation',
      duration: 'Jan 2025 - May 2025',
      description: 'Built an AI-powered WhatsApp bot using n8n, OpenAI, and Twilio API to automate bill generation and dispatch for e-commerce orders.',
      tech: ['n8n', 'OpenAI API', 'Twilio API', 'Node.js'],
      features: [
        'Automated bill generation',
        'Real-time WhatsApp integration',
        'AI-powered responses',
        'Payment status tracking',
        'Invoice management system'
      ],
      links: {
        github: '',
        live: ''
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover:shadow-neon-cyan transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold neon-text">{project.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Tag className="w-4 h-4 mr-2 text-neon-cyan" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground flex items-start">
                          <span className="text-neon-cyan mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      variant="outline" 
                      className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-primary-foreground"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      className="bg-neon-cyan text-primary-foreground hover:shadow-neon-cyan"
                      onClick={() => window.open(project.links.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-neon-cyan">
                    Technologies Used
                  </h4>
                  <div className="space-y-3">
                    {project.tech.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="glass-card rounded-lg p-3 text-center text-sm font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/sourabhchouhan1', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
