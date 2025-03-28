
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate movement percentage (-20 to 20)
      const moveX = ((clientX / innerWidth) - 0.5) * 40;
      const moveY = ((clientY / innerHeight) - 0.5) * 40;

      // Apply the transform
      circleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id='home' className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-navy/40 to-transparent transition-transform duration-300 ease-out opacity-60"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-navy-glow mb-4 tracking-widest uppercase text-sm animate-fade-in">
            Web Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 animate-fade-in animate-delay-100">
            <span className="text-white text-glow">Amarjeet</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed animate-fade-in animate-delay-200">
            I create modern, responsive, and user-friendly web experiences with elegant code and stunning design.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-300">

            <button
              onClick={() => {
                const section = document.getElementById('projects');
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="glass-button px-8 py-4 text-white font-medium glow"
            >
              View My Work
            </button>

            <a
              href="./Amarjeet_Chik_Baraik_Resume.pdf"
              download="Amarjeet_Chik_Baraik_Resume.pdf"
              className="glass-button px-8 py-4 text-white font-medium glow flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>

            <button
              onClick={() => {
                const section = document.getElementById('contact');
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="glass-button px-8 py-4 text-white font-medium glow"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-16 sm:mt-32 flex justify-center animate-fade-in animate-delay-400">
            <a href="#about" className="text-white/70 hover:text-white transition-colors flex flex-col items-center">
              <span className="mb-2 text-sm">Scroll Down</span>
              <div className="w-5 h-10 rounded-full border border-white/20 flex justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 animate-float" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
