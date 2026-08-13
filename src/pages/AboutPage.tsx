import React, { useEffect } from 'react';
import { APP_NAME } from '@/utils/constants';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = `About Us | ${APP_NAME}`;
  }, []);

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary text-white py-16 px-4 shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">About Our Club</h1>
          <p className="text-xl text-accent font-medium italic">"We Serve"</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-surface rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="font-heading text-2xl font-bold text-text mb-4 inline-block relative">
              {APP_NAME}
              <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-accent rounded-full"></div>
            </h2>
            <div className="prose prose-blue text-text-muted mt-4">
              <p>
                The Lions Club of Colombo 4 is a dedicated group of volunteers committed to community service and making a positive impact in our society. Since our charter, we have focused on projects related to vision, hunger, the environment, childhood cancer, and diabetes, aligning with Lions Clubs International's global causes.
              </p>
              <p>
                Our members come from diverse professional backgrounds, united by a shared passion to serve those in need. This directory connects our members and facilitates better communication to drive our service initiatives forward.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-text mb-4 inline-block relative">
              Lions Clubs International
              <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-accent rounded-full"></div>
            </h2>
            <div className="prose prose-blue text-text-muted mt-4">
              <p>
                Lions Clubs International is the world's largest service club organization, with over 1.4 million members in more than 48,000 clubs across 200 countries and geographic areas. Founded in 1917, Lions are best known for fighting blindness, but we also volunteer for many different kinds of community projects.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
            <h3 className="font-bold text-text mb-2">Contact Us</h3>
            <p className="text-sm text-text-muted mb-4">For inquiries about our club or membership:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-text-muted">
                <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@lionsclubcolombo4.org" className="hover:text-primary transition-colors">info@lionsclubcolombo4.org</a>
              </li>
              <li className="flex items-center text-text-muted">
                <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+94 11 234 5678</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
