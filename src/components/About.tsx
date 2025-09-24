const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="glass-card rounded-2xl p-8 neon-glow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 neon-text">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Enthusiastic Computer Science student with strong problem-solving skills and 
                proficiency in multiple programming languages. Adept at effective communication 
                and collaboration within team environments. 
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed">
                Seeking opportunities to apply technical expertise and deliver impactful 
                solutions that contribute to organizational success. Passionate about creating 
                innovative solutions and exploring new technologies.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3 text-neon-cyan">
                  Current Focus
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full Stack Web Development</li>
                  <li>• AI/ML Integration</li>
                  <li>• Cloud Technologies</li>
                  <li>• Mobile App Development</li>
                </ul>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3 text-neon-cyan">
                  Interests
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">🏏 Cricket</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">🎬 Movies</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">🚀 Technology</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">📚 Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;