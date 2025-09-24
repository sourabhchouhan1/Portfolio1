import { GraduationCap, Award, Trophy } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science Engineering',
      institution: 'SBCET, Jaipur',
      duration: '2021 - 2025',
      cgpa: '8.3 CGPA',
      status: 'current'
    },
    {
      degree: 'Senior Secondary School',
      institution: 'NBF Public School, Jaipur',
      duration: '2020 - 2021',
      cgpa: '71%',
      status: 'completed'
    },
    {
      degree: 'Secondary School',
      institution: 'NBF Public School, Jaipur',
      duration: '2018 - 2019',
      cgpa: '81%',
      status: 'completed'
    }
  ];

  const achievements = [
    {
      title: 'Sports Club Leader',
      description: 'Event organizer in Manthan 2k24',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: '1st Prize Winner',
      description: 'Intercollege Cricket Tournament',
      icon: <Trophy className="w-5 h-5" />
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Education & Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 neon-text flex items-center">
              <GraduationCap className="w-6 h-6 mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`glass-card rounded-xl p-6 ${
                    edu.status === 'current' ? 'shadow-neon-cyan' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg text-neon-cyan">
                      {edu.degree}
                    </h4>
                    {edu.status === 'current' && (
                      <span className="bg-neon-cyan text-primary-foreground px-2 py-1 rounded-full text-xs">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{edu.duration}</span>
                    <span className="font-semibold text-foreground">{edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 neon-text flex items-center">
              <Trophy className="w-6 h-6 mr-3" />
              Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-6 hover:shadow-neon-purple transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="text-neon-cyan mr-4 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-neon-cyan">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Additional Info */}
              <div className="glass-card rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-3 text-neon-cyan">
                  Leadership & Sports
                </h4>
                <p className="text-muted-foreground">
                  Active sports enthusiast with leadership experience in organizing 
                  college events. Passionate cricket player with competitive achievements 
                  at intercollege level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;