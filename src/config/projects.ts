// projects
export const projectHeadLine = "My Projects"
export const projectIntro = "Discover my work and contributions."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = []

export const githubProjects: Array<ProjectItemType> = []