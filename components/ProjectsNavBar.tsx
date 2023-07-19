import { FunctionComponent } from 'react'

const NavItem: FunctionComponent<{
  value: string
  filterByCategory: Function
  active: string
}> = ({ value, filterByCategory, active }) => {
  let className = 'cursor-pointer hover:text-slate-500'
  if (active === value) {
    className += ' text-slate-500'
  }

  return (
    <li className={className} onClick={() => filterByCategory(value)}>
      {value}
    </li>
  )
}

const ProjectsNavBar: FunctionComponent<{
  filterByCategory: Function
  active: string
}> = (props) => {
  const categories = ['All', 'React']

  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      {categories.map((category, i) => (
        <NavItem key={`${i} ${category}`} value={category} {...props} />
      ))}
    </div>
  )
}

export default ProjectsNavBar
