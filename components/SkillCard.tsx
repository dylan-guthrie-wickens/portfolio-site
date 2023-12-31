import { Skill } from '@/lib/models'
import { FunctionComponent } from 'react'

const SkillCard: FunctionComponent<{ skill: Skill }> = ({
  skill: { Icon, about, title },
}) => {
  function createMarkup() {
    return {
      __html: about,
    }
  }

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default SkillCard
