import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  site: {
    website: 'https://gilliannepapasin.com/',
    title: 'Gillianne Papasin - Creative Technologist / Design Engineer',
    author: 'Gillianne Papasin',
    description:
      'Gillianne Papasin is a creative technologist and design engineer in Melbourne, working between design, frontend engineering and physical interaction. She runs Milk Krate, a creative technology studio.',
    language: 'en-AU'
  },

  general: {
    contentWidth: '35rem',
    centeredLayout: true, // false for left-aligned
    themeToggle: true, // Light/dark toggle (follows system theme by default)
    postListDottedDivider: false,
    fadeAnimation: true
  },

  date: {
    dateFormat: 'YYYY-MM-DD', // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    dateSeparator: '.', // Ignored for MONTH DAY YYYY and DAY MONTH YYYY
    dateOnRight: true // Date position in the post list
  },

  post: {
    readingTime: true,
    toc: true, // Shown when there is enough page width
    imageViewer: true,
    copyCode: true
  }
}
