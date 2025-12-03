'use client'

import { useState } from 'react'

interface ServiceImageProps {
  src: string
  alt: string
  serviceName: string
  className?: string
}

export default function ServiceImage({ src, alt, serviceName, className = '' }: ServiceImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="text-center p-4">
          <div className="text-3xl mb-2">{serviceName.split(' ')[0].charAt(0)}</div>
          <div className="font-bold text-blue-900">{serviceName.split(' ')[0]}</div>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoading(false)}
    />
  )
}