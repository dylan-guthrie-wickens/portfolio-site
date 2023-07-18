import { Tech } from '@/lib/models'
import { FunctionComponent } from 'react'

const Bar: FunctionComponent<{ tech: Tech }> = ({
  tech: { Icon, name, level },
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        className="flex items-center px-4 py-1 bg-black rounded-full"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  )
}

export default Bar
