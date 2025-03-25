
import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const About = () => {
  const [animated, setAnimated] = useState(false);

  const skills: Skill[] = [
    { name: 'React', percentage: 95, icon: '⚛️' },
    { name: 'JavaScript', percentage: 90, icon: '🟨' },
    { name: 'TypeScript', percentage: 85, icon: '🔷' },
    { name: 'Node.js', percentage: 80, icon: '🟢' },
    { name: 'UI/UX Design', percentage: 75, icon: '🎨' },
    { name: 'CSS/SCSS', percentage: 90, icon: '🎭' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (!element) return;

      const position = element.getBoundingClientRect();
      const isVisible = position.top < window.innerHeight - 200;

      if (isVisible) {
        setAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    //about section
    <section id="about" className="pt-20 md:pt-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* about header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            A passionate web developer with expertise in creating beautiful, functional websites
          </p>
        </div>

        {/* skills section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* skills tree image */}
          <img src="./skills.svg" alt="" />

          {/* skills */}
          <div className={`transform transition-all duration-700 ${animated ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card p-6 flex flex-col items-center text-center transform transition-all hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-navy to-navy-glow rounded-full transition-all duration-1000 ease-in-out"
                      style={{
                        width: animated ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                  <span className="text-sm text-navy-glow">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* about me content */}
        <div className="mt-20 flex flex-col justify-center items-center gap-5 md:flex-row">
          <div
            className={`glass-card p-8 transform transition-all duration-700 ${animated ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a creative and detail-oriented web developer with years of experience
              in crafting engaging digital experiences. My approach combines technical expertise
              with an eye for design, resulting in websites that are both beautiful and functional.
            </p>
          </div>

          <div
            className={`glass-card p-8 transform transition-all duration-700 delay-100 ${animated ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
          >
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              I believe in clean, efficient code and intuitive user experiences.
              Every project I undertake is built with scalability and performance in mind,
              ensuring that the final product not only meets but exceeds client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
