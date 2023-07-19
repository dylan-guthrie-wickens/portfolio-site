import { IconType } from 'react-icons'

export interface Skill {
  title: string
  about: string
  Icon: IconType
}
export interface Tech {
  name: string
  Icon: IconType
}

export interface TechStack {
  title: string
  data: Tech[]
}

export interface Project {
  id: number
  name: string
  description: string
  imagePath: string
  urls: ProjectLink[]
  category: string[]
  techs: string[]
}

export interface ProjectLink {
  url: string
  type: string
  Icon: IconType
}
