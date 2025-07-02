
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
              href="https://drive.google.com/file/d/1npQgILPm9JjHIlsO5K4_v9jGqpIQqtFB/view?usp=sharing"
              className="glass-button px-8 py-4 text-white font-medium glow flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M14.9805 7.01556C14.9805 7.01556 15.4805 7.51556 15.9805 8.51556C15.9805 8.51556 17.5687 6.01556 18.9805 5.51556" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9.99491 2.02134C7.49644 1.91556 5.56618 2.20338 5.56618 2.20338C4.34733 2.29053 2.01152 2.97385 2.01154 6.96454C2.01156 10.9213 1.9857 15.7993 2.01154 17.7439C2.01154 18.932 2.74716 21.7033 5.29332 21.8518C8.38816 22.0324 13.9628 22.0708 16.5205 21.8518C17.2052 21.8132 19.4847 21.2757 19.7732 18.7956C20.0721 16.2263 20.0126 14.4407 20.0126 14.0157" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M21.9999 7.01556C21.9999 9.77698 19.7592 12.0156 16.9951 12.0156C14.231 12.0156 11.9903 9.77698 11.9903 7.01556C11.9903 4.25414 14.231 2.01556 16.9951 2.01556C19.7592 2.01556 21.9999 4.25414 21.9999 7.01556Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M6.98053 13.0156H10.9805" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M6.98053 17.0156H14.9805" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
              View Resume
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
