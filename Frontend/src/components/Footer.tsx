
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/developer-amarjeetBaraik/' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/amarjeet-chik-baraik' },
    { name: 'X.com', url: 'https://x.com/Amarjeet_c_b' },
    { name: 'Instagram', url: 'https://www.instagram.com/amarjeet_baraik_/' },
  ];

  return (
    <footer className="bg-black absolute h-auto flex flex-col justify-center -z-10 md:-mt-16">
      {/* blackhole video */}
      <video muted autoPlay loop src="./blackhole.webm" className=""></video>

      <div className="containermx-auto px-6 md:absolute top-[60%] lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <NavLink to="/" className="text-2xl font-bold tracking-tight mb-6 inline-block">
              <span className="text-white">Amarjeet</span>
              <span className="text-navy-glow">.dev</span>
            </NavLink>

            <p className="text-gray-400 leading-relaxed mb-6">
              Creating modern, responsive, and user-friendly web experiences with elegant code and stunning design.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    key={link.name}
                    onClick={() => {
                      console.log(link.path)
                      const section = document.getElementById(link.path);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    // className={`px-2 py-3 text-sm uppercase tracking-wider border-b border-white/5 ${isActive(item.path)
                    //   ? 'text-white font-medium'
                    //   : 'text-gray-400 hover:text-white'
                    //   }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 text-navy-glow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>amarjeetofficial81@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 text-navy-glow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 7295909081</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 text-navy-glow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ranchi Jharkhand, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Amarjeet. All rights reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Designed and built with passion and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
