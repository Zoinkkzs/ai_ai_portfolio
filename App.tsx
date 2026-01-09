import React, { useState, useEffect } from 'react';

// --- Constants & Types ---

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const PROJECTS = [
  {
    title: 'Exploring with Curiosity',
    category: 'Space Tech',
    description: 'Interactive WebGL rover simulation visualizing surface data from Mars exploration missions.',
    image: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1000&auto=format&fit=crop',
    tags: ['Three.js', 'React'],
    color: 'secondary',
    url: '#'
  },
  {
    title: 'Molecular Bonds',
    category: 'Chemistry',
    description: 'Educational platform featuring minimalist 3D hexagonal structures and covalent bond visualizations.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
    tags: ['WebGL', 'D3.js'],
    color: 'primary',
    url: '#'
  },
  {
    title: 'Nebula Cartography',
    category: 'Astrophysics',
    description: 'Mapping star density in local clusters using high-contrast monochromatic UI design.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop',
    tags: ['Data Viz', 'UI/UX'],
    color: 'secondary',
    url: '#'
  }
];

const TECH_STACK = [
  { icon: 'code', title: 'Frontend', desc: 'React, WebGL, Tailwind', color: 'text-primary' },
  { icon: 'hexagon', title: 'Science', desc: 'Organic Chem, Physics', color: 'text-secondary' },
  { icon: 'database', title: 'Data', desc: 'Python, Visualization', color: 'text-secondary' },
  { icon: 'architecture', title: 'Design', desc: 'Figma, Blender 3D', color: 'text-primary' },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${scrolled ? 'border-white/5 bg-background-dark/90 backdrop-blur-md' : 'border-transparent bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div 
            className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary/50 shadow-neon"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop')` }}
            aria-label="Portrait of Thanh Huy"
          />
          <span className="text-lg font-bold tracking-tight text-white hidden sm:block">Thanh Huy</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background-dark/95 border-b border-white/5 backdrop-blur-md py-4">
          <div className="flex flex-col items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 bg-gradient-to-b from-background-dark to-[#050a0d]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Abstract Wave generated via CSS mask or simple background image for specific look */}
        <div 
            className="wave-bg absolute bottom-0 h-80 w-[200%] opacity-30 mix-blend-screen"
            style={{ 
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/1/1a/Wave_Pattern.svg")',
                filter: 'hue-rotate(180deg) brightness(1.2)'
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center mt-10">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary/80">Student Portfolio 2024</p>
        <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl">
          Bridging the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-white">Abyss</span> <br/>
          to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-400 to-white">Cosmos</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-slate-400 sm:text-xl">
          I'm <span className="text-white font-medium">Thanh Huy</span>. I blend organic chemistry concepts with deep-space aesthetics to create immersive digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="group relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-sm font-bold text-[#020204] transition-all hover:bg-cyan-300 hover:shadow-neon">
            <span className="relative z-10 mr-2">Explore Universe</span>
            <span className="material-symbols-outlined relative z-10 text-[20px] transition-transform group-hover:translate-x-1">rocket_launch</span>
          </a>
          <a href="#contact" className="flex h-12 items-center justify-center rounded-full border border-slate-700 px-8 text-sm font-bold text-white transition-colors hover:border-secondary hover:text-secondary hover:shadow-neon-purple bg-surface-dark/50 backdrop-blur-sm">
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-slate-500">
        <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-void overflow-hidden">
      <div className="absolute inset-0 z-0 bg-stars opacity-40"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
          <div>
            <span className="text-secondary font-mono text-sm tracking-widest mb-2 block">SELECTED WORKS</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Exploration Log</h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-secondary transition-colors">
            Full Archive <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className={`group relative cursor-pointer overflow-hidden rounded-xl bg-[#0a0f14] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-${project.color === 'primary' ? 'primary' : 'secondary'}/50 hover:shadow-neon${project.color !== 'primary' ? '-purple' : ''}`}>
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url('${project.image}')`,
                    filter: project.title.includes('Curiosity') ? 'contrast(1.2) hue-rotate(220deg) saturate(0.8)' : 
                            project.title.includes('Molecular') ? 'grayscale(100%) brightness(0.8) contrast(1.2)' : 
                            'hue-rotate(45deg) contrast(1.1)' 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f14] via-transparent to-transparent opacity-90"></div>
                </div>
                <div className={`absolute top-4 right-4 bg-${project.color === 'primary' ? 'primary' : 'purple-500'}/20 backdrop-blur-md border border-${project.color === 'primary' ? 'primary' : 'purple-500'}/30 text-${project.color === 'primary' ? 'primary' : 'purple-300'} text-xs font-bold px-3 py-1 rounded-full`}>
                  {project.category}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className={`text-xl font-bold text-white group-hover:text-${project.color} transition-colors`}>{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">{project.description}</p>
                <div className="mt-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-slate-800"></div>
      
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <span className="text-primary">Tech</span> & <span className="text-secondary">Science</span> Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">science</span>
              Scientific Methodology
            </h3>
            <p className="text-slate-400 leading-relaxed">
              My approach to frontend development is rooted in the precision of the scientific method. I treat every project like a laboratory experiment—hypothesizing user needs, experimenting with design patterns, and analyzing engagement data.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether rendering complex molecular structures or optimizing load times for deep-space data visualizations, I maintain a monochromatic focus on performance and clarity.
            </p>
            <div className="pt-4">
              <a href="#" className="inline-flex items-center text-white border-b border-primary pb-1 hover:text-primary transition-colors font-medium">
                Analyze Resume <span className="material-symbols-outlined ml-2 text-lg">download</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
            {TECH_STACK.map((tech) => (
              <div key={tech.title} className={`bg-surface-dark/50 backdrop-blur-sm p-5 rounded-lg border border-slate-800 hover:border-${tech.color.includes('primary') ? 'primary' : 'secondary'} transition-all group`}>
                <span className={`material-symbols-outlined ${tech.color} mb-3 text-3xl group-hover:scale-110 transition-transform`}>{tech.icon}</span>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{tech.title}</h4>
                <p className="text-xs text-slate-500 mt-1 font-mono">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 relative overflow-hidden bg-void">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-secondary/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      
      <div className="mx-auto max-w-2xl text-center relative z-10">
        <h2 className="text-4xl font-black text-white mb-6 sm:text-6xl tracking-tighter">Signal Received?</h2>
        <p className="text-lg text-slate-400 mb-12 font-light">
          Ready to collaborate on the next frontier of web design? <br className="hidden sm:block"/>
          My frequency is open for new opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="mailto:hello@alexrivera.com" className="flex items-center justify-center gap-3 bg-[#0a0f14] hover:bg-[#131b24] border border-slate-800 hover:border-secondary text-white px-8 py-4 rounded-lg transition-all group shadow-lg hover:shadow-neon-purple">
            <span className="material-symbols-outlined text-secondary group-hover:animate-pulse">mail</span>
            <span className="font-medium tracking-wide">hello@thanhhuy.com</span>
          </a>
          <div className="flex gap-4 justify-center items-center">
            {['GitHub', 'LinkedIn'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className={`h-14 w-14 flex items-center justify-center rounded-lg bg-[#0a0f14] border border-slate-800 text-slate-400 hover:text-white hover:border-${platform === 'GitHub' ? 'primary' : 'secondary'} hover:shadow-${platform === 'GitHub' ? 'neon' : 'neon-purple'} transition-all`}
                aria-label={platform}
              >
                 <span className="material-symbols-outlined">{platform === 'GitHub' ? 'code_blocks' : 'person_search'}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-void py-10 px-6 text-center">
      <p className="text-slate-600 text-sm font-mono">
        &copy; 2024 Thanh Huy. <span className="text-slate-700 mx-2">|</span> Built in the void with <span className="text-secondary">♥</span> and Tailwind CSS.
      </p>
    </footer>
  );
};

export default function App() {
  return (
    <main className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
