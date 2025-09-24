import { Code2, Database, Settings, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['C', 'C++', 'Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
      color: 'neon-cyan'
    },
    {
      title: 'Database Management',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'SQLite', 'MongoDB'],
      color: 'neon-purple'
    },
    {
      title: 'Development Tools',
      icon: <Settings className="w-6 h-6" />,
      skills: ['VS Code', 'Jupyter Notebook', 'IntelliJ IDEA', 'Git', 'Github', 'Linux'],
      color: 'neon-pink'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      skills: ['Team Collaboration', 'Problem Solving', 'Communication', 'Leadership'],
      color: 'neon-cyan'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 hover:shadow-neon-purple transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`text-${category.color} mr-3`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-semibold text-${category.color}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-background/50 rounded-lg p-3 text-center text-sm font-medium hover:bg-neon-cyan/10 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;