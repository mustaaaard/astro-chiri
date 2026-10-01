// Skills shown on the homepage, grouped and ordered for design and frontend roles.
export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Design & UX',
    skills: [
      'Figma',
      'UI/UX and interaction design',
      'prototyping',
      'user research',
      'accessible design',
      'brand identity',
      'Illustrator',
      'Photoshop',
      'Affinity Designer',
      'Affinity Photo',
      'Canva'
    ]
  },
  {
    title: 'Frontend',
    skills: [
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'React',
      'Next.js',
      'React Native',
      'Astro',
      'Angular',
      'Flutter',
      'Redux',
      'Framer Motion',
      'Material UI',
      'Chakra UI',
      'Vite',
      'Progressive Web Apps'
    ]
  },
  {
    title: 'Creative Technology',
    skills: [
      'interactive installations',
      'NFC',
      'thermal printers',
      'offline-first and local-first systems',
      '3D modelling for fabrication',
      'physical enclosure design'
    ]
  },
  {
    title: 'Backend & Data',
    skills: [
      'Node.js',
      'Django REST Framework',
      'REST APIs',
      'real-time data',
      'MongoDB',
      'SQL (MySQL)',
      'Contentful',
      'Magnolia CMS'
    ]
  },
  {
    title: 'Other Languages',
    skills: ['Python', 'C++', 'Dart']
  },
  {
    title: 'Testing & Delivery',
    skills: [
      'Jest',
      'Playwright',
      'Storybook',
      'Lighthouse',
      'Git',
      'GitHub',
      'Cloudflare',
      'AWS (Certified Cloud Practitioner)'
    ]
  },
  {
    title: 'AI Tools',
    skills: ['Claude Code', 'Gemini']
  }
]
