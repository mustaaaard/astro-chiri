// Experience strip shown on the homepage. One line per role, newest first.
export interface ExperienceItem {
  org: string
  role: string
  dates: string
}

export const experience: ExperienceItem[] = [
  { org: 'Milk Krate', role: 'Founder & Design Engineer', dates: '2025–Present' },
  { org: 'Accenture', role: 'Application Developer (Frontend)', dates: '2023–2025' },
  { org: 'PwC', role: 'Cloud Trust Intern', dates: '2022' },
  { org: 'Better.sg', role: 'Volunteer Head Developer', dates: '2021' }
]
