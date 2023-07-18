import { skills } from '@/lib/data'
import SkillCard from '@/components/SkillCard'

export default function Index() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">{`I am a versatile full-stack software developer who has recently transitioned from a successful career in high-end retail and management to the field of software development. With a strong passion for leveraging technology to create innovative solutions, I thrive on the challenge of creative problem-solving. I am looking forward to applying my diverse skill set in the technology industry.
  `}</h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">{`Skills`}</h6>

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skill, i) => (
            <div
              key={`${i} ${skill.title}`}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
