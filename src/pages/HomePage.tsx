import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, APP_TITLE, APP_DESCRIPTION } from '@/utils/constants';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `${APP_TITLE} | ${APP_NAME}`;
  }, []);

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="inline-block py-1 px-4 rounded-full bg-accent/20 text-accent font-semibold text-xs tracking-widest uppercase mb-6 border border-accent/30 shadow-inner">
            Lions Clubs International • District 306 C2
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-md leading-tight">
            We Serve. <br className="hidden md:block"/> We Care. We Lead.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            {APP_DESCRIPTION}
          </p>
          <Link to="/directory" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-accent rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Explore Directory
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </Link>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-background fill-current preserve-3d" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-8 px-4 bg-background relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Community Service', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', desc: 'Dedicated to improving our local communities through hands-on service.' },
              { title: 'Global Impact', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', desc: 'Part of a global network of 1.4 million members making a difference worldwide.' },
              { title: 'Leadership', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', desc: 'Empowering individuals to lead and inspire others to create positive change.' }
            ].map((pillar, i) => (
              <div key={i} className="bg-surface p-8 rounded-2xl shadow-lg border border-border/50 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={pillar.icon}></path></svg>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-text group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-text-muted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary my-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { number: '50+', label: 'Active Members' },
              { number: '20+', label: 'Years of Service' },
              { number: '100+', label: 'Projects Completed' },
              { number: '10k+', label: 'Lives Impacted' }
            ].map((stat, i) => (
              <div key={i} className="px-4 group">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2 transform group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-300 font-medium tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
