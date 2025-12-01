import { ChevronDown, ChevronUp } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  items: string[]
  icon: React.ReactNode
  isExpanded?: boolean
  onToggle?: () => void
}

export default function ServiceCard({
  title,
  description,
  items,
  icon,
  isExpanded,
  onToggle
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-blue-900 mr-4">{icon}</div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        <button onClick={onToggle} className="text-blue-900">
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {isExpanded && (
        <ul className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}