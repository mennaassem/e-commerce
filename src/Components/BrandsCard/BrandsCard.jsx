import React from 'react'

export default function BrandsCard({ brandInfo }) {
  return (
    <div className="card   bg-white relative rounded-xl shadow-lg overflow-hidden border border-primary-600/20 p-3 text-center">
      <img src={brandInfo.image} alt={brandInfo.name} />
      <p>{brandInfo.name}</p>
    </div>
  );
}