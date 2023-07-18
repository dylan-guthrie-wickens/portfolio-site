import { IconType } from 'react-icons'

export interface Skill {
  title: string
  about: string
  Icon: IconType
}
export interface Tech {
  name: string
  level: string
  Icon: IconType
}

export interface TechStack {
  title: string
  data: Tech[]
}
