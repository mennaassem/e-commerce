import React from 'react'
import BrandsCardSkeleton from './BrandsCardSkeleton'

export default function BrandsSkeleton() {
  return (
    <>
      <div className='py-5'>
        <h2 className="text-3xl font-bold mb-3 text-center bg-gray-100 p-3">All Brands</h2>
        <div className="container">
          <div className='py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
            {Array.from({ length: 10 }).map((_, idx) => (
              <BrandsCardSkeleton key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
