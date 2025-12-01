import React from 'react'

export type ServiceCardProps = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  items: string[]
  isExpanded: boolean
  onToggle: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  items,
  isExpanded,
  onToggle
}) => (
  <div className="bg-white rounded-lg shadow-md mb-8 p-6">
    <button
      className="flex items-center w-full text-left focus:outline-none"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-controls={`service-details-${title}`}
    >
      <div className="mr-4 text-blue-900">{icon}</div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <div>
        <svg
          className={`w-5 h-5 transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
    {isExpanded && (
      <div
        id={`service-details-${title}`}
        className="mt-4 pl-8"
      >
        <ul className="list-disc">
          {items.map((item, idx) => (
            <li key={idx} className="text-gray-800 mb-1">{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

export default ServiceCard