/**
 * Central Homepage Content Configuration
 * ═══════════════════════════════════════
 * Edit ALL homepage text, images, and data from this single file.
 * No need to search through individual components.
 */

// ─── Image Paths ─────────────────────────────────────────────
export const siteImages = {
  hero: '/images/homepage/hero.jpg',
  about: '/images/homepage/about.jpg',
  impact: '/images/homepage/impact.jpg',
  finalCta: '/images/homepage/final-cta.jpg',
  clubLogo: '/images/club-logo.png',
  districtLogo: '/images/district-logo.png',
};

// ─── Hero Section ────────────────────────────────────────────
export const heroContent = {
  eyebrow: 'LIONS CLUB OF COLOMBO 4 • DISTRICT 306 C2',
  title: 'Serving With Purpose.',
  titleHighlight: 'Creating Lasting Impact.',
  description:
    'Together, we serve our community, empower people and create meaningful change across Colombo and beyond.',
  primaryCta: { text: 'Explore Our Impact', href: '#impact' },
  secondaryCta: { text: 'Join Us', href: '#get-involved' },
};

// ─── Impact Statistics ───────────────────────────────────────
export const impactStats = [
  {
    value: 50,
    suffix: '+',
    label: 'Active Members',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Projects Completed',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Lives Impacted',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Years of Service',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Volunteer Hours',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
];

// ─── About Section ───────────────────────────────────────────
export const aboutContent = {
  eyebrow: 'WHO WE ARE',
  title: 'Serving Colombo With Purpose & Passion',
  description:
    'The Lions Club of Colombo 4 is a dedicated community of volunteers committed to service, leadership and making a lasting positive impact across Colombo. As part of Lions Clubs International — the world\'s largest service club organization — we bring together professionals, leaders and community members united by a shared vision of creating meaningful change.',
  highlights: [
    {
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      title: 'Community First',
      text: 'Every project we undertake is rooted in the real needs of our community.',
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Global Network',
      text: 'Part of 1.4 million Lions members serving in over 200 countries worldwide.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Driven by Action',
      text: 'We don\'t just plan — we execute, measure and create lasting impact.',
    },
  ],
  ctaText: 'Learn More About Us',
  ctaHref: '/about',
};

// ─── Service Areas ───────────────────────────────────────────
export const serviceAreas = [
  {
    title: 'Health & Wellness',
    description: 'Organizing free medical camps, health screenings and wellness programs for underserved communities.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    color: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Vision',
    description: 'Fighting preventable blindness through free eye screenings, spectacle donations and cataract surgery referrals.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Diabetes Awareness',
    description: 'Raising awareness about diabetes prevention and management through community education and screening camps.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Environment',
    description: 'Leading tree planting drives, beach cleanups and environmental conservation initiatives across Colombo.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Children & Education',
    description: 'Supporting children through school supply drives, scholarships and educational development programs.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Community Development',
    description: 'Building stronger communities through infrastructure projects, skill development and welfare programs.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    color: 'from-sky-500 to-cyan-600',
  },
];

// ─── Featured Projects ───────────────────────────────────────
export const featuredProjects = [
  {
    title: 'Community Eye Care Program',
    category: 'Vision',
    description: 'Free eye screenings and spectacle distribution for over 500 community members in underserved areas of Colombo.',
    date: '2025',
    image: '/images/homepage/impact.jpg',
    impact: '500+ people screened',
    featured: true,
  },
  {
    title: 'School Supplies Distribution',
    category: 'Education',
    description: 'Providing school bags, stationery and learning materials to children in rural schools.',
    date: '2025',
    image: '/images/homepage/gallery-education.jpg',
    impact: '200+ children supported',
    featured: false,
  },
  {
    title: 'Beach Cleanup & Tree Planting',
    category: 'Environment',
    description: 'Environmental conservation drive along Colombo\'s coastline with tree planting and beach cleanup activities.',
    date: '2024',
    image: '/images/homepage/gallery-environment.jpg',
    impact: '1000+ trees planted',
    featured: false,
  },
  {
    title: 'Free Health Camp',
    category: 'Health',
    description: 'Comprehensive medical health camp offering free checkups, blood pressure monitoring and health counseling.',
    date: '2024',
    image: '/images/homepage/gallery-health.jpg',
    impact: '300+ patients treated',
    featured: false,
  },
];

// ─── Impact Section ──────────────────────────────────────────
export const impactSectionContent = {
  eyebrow: 'OUR IMPACT',
  title: 'Service You Can See.',
  titleHighlight: 'Impact You Can Measure.',
  description:
    'Every project we undertake is designed to create tangible, measurable change. From vision care to education, our service reaches thousands across Sri Lanka.',
  metrics: [
    { value: '100+', label: 'Projects Delivered' },
    { value: '10,000+', label: 'People Reached' },
    { value: '5,000+', label: 'Volunteer Hours' },
    { value: '20+', label: 'Community Initiatives' },
  ],
};

// ─── Upcoming Events ─────────────────────────────────────────
export const upcomingEvents = [
  {
    title: 'Annual Charity Gala Dinner',
    date: '2026-09-15',
    location: 'Cinnamon Grand, Colombo',
    description: 'Join us for an evening of fellowship, entertainment and fundraising for our community projects.',
    image: '/images/homepage/gallery-event.jpg',
  },
  {
    title: 'Free Eye Screening Camp',
    date: '2026-10-08',
    location: 'Community Hall, Bambalapitiya',
    description: 'Free comprehensive eye examinations and spectacle distribution for community members.',
    image: '/images/homepage/impact.jpg',
  },
  {
    title: 'Environmental Awareness Walk',
    date: '2026-10-20',
    location: 'Galle Face Green, Colombo',
    description: 'A community walk to raise awareness about environmental conservation and climate action.',
    image: '/images/homepage/gallery-environment.jpg',
  },
];

// ─── News & Stories ──────────────────────────────────────────
export const newsArticles = [
  {
    title: 'Lions Club of Colombo 4 Completes 100th Service Project',
    category: 'Milestone',
    date: '2026-07-15',
    excerpt: 'A landmark achievement as our club completes its 100th community service project, impacting thousands of lives across Colombo.',
    image: '/images/homepage/gallery-community.jpg',
  },
  {
    title: 'New Partnership With National Eye Hospital',
    category: 'Partnership',
    date: '2026-06-28',
    excerpt: 'A new partnership to expand our vision care programs and provide free cataract surgeries to underserved communities.',
    image: '/images/homepage/impact.jpg',
  },
  {
    title: 'Youth Leadership Development Program Launched',
    category: 'Education',
    date: '2026-05-10',
    excerpt: 'Empowering the next generation of community leaders through our new youth mentorship and skills development initiative.',
    image: '/images/homepage/gallery-education.jpg',
  },
];

// ─── Get Involved ────────────────────────────────────────────
export const getInvolvedCards = [
  {
    title: 'Become a Lion',
    description: 'Join our community of dedicated individuals committed to service, leadership and making a difference.',
    buttonText: 'Become a Member',
    href: '#',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Volunteer',
    description: 'Support our projects and contribute your time, skills and passion to create positive community impact.',
    buttonText: 'Volunteer With Us',
    href: '#',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
  {
    title: 'Partner With Us',
    description: 'Collaborate with us as a corporate partner, sponsor or institutional ally to create greater community impact.',
    buttonText: 'Become a Partner',
    href: '#',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

// ─── Member Spotlight ────────────────────────────────────────
export const memberSpotlight = {
  // Uses the first member from members.json by default
  // Override with specific member data if needed:
  name: 'Leo Lion Manish Perera',
  position: 'Vice President',
  quote: 'Service is not just something we do. It is the difference we choose to make every single day for our community and the people who need us most.',
  image: '/images/members/manish.jpeg',
  ctaText: 'Meet Our Members',
  ctaHref: '/directory',
};

// ─── Lions Global Connection ─────────────────────────────────
export const lionsGlobalContent = {
  eyebrow: 'GLOBAL NETWORK',
  title: 'Part of a Global Movement of Service',
  description:
    'Lions Club of Colombo 4 is proudly part of Lions Clubs International — the world\'s largest service club organization. Founded in 1917, Lions Clubs bring together more than 1.4 million members across 200+ countries, united by the motto "We Serve."',
  stats: [
    { value: '1.4M+', label: 'Members Worldwide' },
    { value: '48,000+', label: 'Clubs Globally' },
    { value: '200+', label: 'Countries & Areas' },
    { value: '100+', label: 'Years of Service' },
  ],
  ctaText: 'Visit Lions Clubs International',
  ctaHref: 'https://www.lionsclubs.org',
};

// ─── Gallery ─────────────────────────────────────────────────
export const galleryImages = [
  { src: '/images/homepage/hero.jpg', alt: 'Community outreach program distributing supplies', category: 'Community' },
  { src: '/images/homepage/gallery-health.jpg', alt: 'Free medical health camp for rural communities', category: 'Health' },
  { src: '/images/homepage/gallery-environment.jpg', alt: 'Beach cleanup and tree planting initiative', category: 'Environment' },
  { src: '/images/homepage/gallery-education.jpg', alt: 'School supplies distribution for children', category: 'Education' },
  { src: '/images/homepage/gallery-community.jpg', alt: 'Annual community gathering and awards ceremony', category: 'Events' },
  { src: '/images/homepage/gallery-event.jpg', alt: 'Charity fundraiser dinner event', category: 'Events' },
  { src: '/images/homepage/impact.jpg', alt: 'Eye care screening camp for community members', category: 'Health' },
  { src: '/images/homepage/about.jpg', alt: 'Volunteer team planning meeting in the park', category: 'Community' },
];

export const galleryCategories = ['All', 'Community', 'Health', 'Environment', 'Education', 'Events'];

// ─── Newsletter ──────────────────────────────────────────────
export const newsletterContent = {
  title: 'Stay Connected With Our Service Journey',
  description: 'Receive updates about our latest projects, events and community initiatives directly in your inbox.',
  placeholder: 'Enter your email address',
  buttonText: 'Subscribe',
  successMessage: 'Thank you for subscribing! We\'ll keep you updated.',
};

// ─── Final CTA ───────────────────────────────────────────────
export const finalCtaContent = {
  title: 'Together, We Can Serve More.',
  description: 'Every meaningful change begins with people willing to make a difference. Join us in creating a better tomorrow for our community.',
  primaryCta: { text: 'Join Us', href: '#get-involved' },
  secondaryCta: { text: 'Support Our Work', href: '#' },
};

// ─── Footer ──────────────────────────────────────────────────
export const footerContent = {
  clubName: 'Lions Club of Colombo 4',
  district: 'Lions Clubs International • District 306 C2',
  motto: '"We Serve"',
  explore: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Directory', href: '/directory' },
    { label: 'Birthdays', href: '/birthdays' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  getInvolved: [
    { label: 'Become a Member', href: '#' },
    { label: 'Volunteer', href: '#' },
    { label: 'Partner With Us', href: '#' },
  ],
  contact: {
    email: 'info@lionsclubcolombo4.org',
    phone: '+94 11 234 5678',
    address: 'Colombo 4, Sri Lanka',
  },
  social: [
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'YouTube', href: '#', icon: 'youtube' },
  ],
};

// ─── Navigation Links (used by Navbar) ───────────────────────
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'Directory', href: '/directory' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];
