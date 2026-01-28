import React from 'react'

export default function HomeDealsSkeleto() {
  const placeholders = Array.from({ length: 8 })
  return (
    <section className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-8 w-56 bg-gray-200 rounded animate-pulse mb-3"></div>
            <div className="flex gap-2 items-center">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="counter flex gap-2 items-center">
                <div className="size-7 rounded-md flex items-center justify-center bg-gray-200 text-sm animate-pulse h-8 w-8" />
                <span className="text-gray-400">:</span>
                <div className="size-7 rounded-md flex items-center justify-center bg-gray-200 text-sm animate-pulse h-8 w-8" />
                <span className="text-gray-400">:</span>
                <div className="size-7 rounded-md flex items-center justify-center bg-gray-200 text-sm animate-pulse h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="h-6 w-36 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {placeholders.map((_, idx) => (
            <div
              key={idx}
              className="card bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 items-center"
            >
              <div className="w-full h-44 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              <div className="w-full flex justify-between items-center mt-2">
                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
    
