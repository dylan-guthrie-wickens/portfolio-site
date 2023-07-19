import { ProjectLink } from '@/lib/models'
import { FunctionComponent } from 'react'
import Image from 'next/image'

const ProjectPopUp: FunctionComponent<{
  description: string
  urls: ProjectLink[]
  imagePath: string
  name: string
  techs: string[]
}> = ({ description, urls, imagePath, name, techs }) => {
  return (
    <>
      <div>
        <Image
          src={imagePath}
          alt={name}
          className="border-2 rounded-md border-slate-950"
          width="300"
          height="150"
          layout="responsive"
        />

        <div className="flex justify-center my-4 space-x-3">
          {urls.map((url, i) => (
            <a
              key={`${i} ${url}`}
              href={url.url}
              className="flex items-center px-4 py-2 space-x-3"
            >
              <url.Icon />
              <span>{url.type}</span>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
        <h3 className="mb-3 font-medium">{description}</h3>
        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
          {techs.map((tech, i) => (
            <span
              className="px-2 py-1 my-1 bg-gray-200 rounded-md dark:text-slate-950"
              key={`${i} ${tech}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectPopUp
