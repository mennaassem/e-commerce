import React from 'react'

export default function BrandsCardSkeleton() {
  return (
    <div className="card bg-white relative rounded-xl shadow-lg overflow-hidden border border-primary-600/20 p-3 text-center">
      <div className="w-full h-24 bg-gray-200 rounded animate-pulse mb-2"></div>
      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mx-auto"></div>
    </div>
  );
}
 
