import React from 'react'
import Loading from '../Loading/Loading'

export default function DetailsTab({product}) {
 if (!product) {
    return <p>Loading...</p>;
  }

         
          
  
  return (
    <div className="space-y-8 text-gray-700">

      {/* Product Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Product Description
        </h3>
        <p className="leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Benefits + Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Benefits */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">
            Benefits
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Rich in vitamins C and K</li>
            <li>Good source of fiber and antioxidants</li>
            <li>Supports heart health</li>
            <li>Helps regulate blood sugar</li>
            <li>Promotes healthy skin</li>
          </ul>
        </div>

        {/* Product Details */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">
            Product Details
          </h4>

          <div className="space-y-2 text-sm">
            <div className="flex">
              <span className="w-28 font-medium">Origin:</span>
              <span>California, USA</span>
            </div>

            <div className="flex">
              <span className="w-28 font-medium">Cultivation:</span>
              <span>Organic</span>
            </div>

            <div className="flex">
              <span className="w-28 font-medium">Storage:</span>
              <span>Refrigerate upon arrival</span>
            </div>

            <div className="flex">
              <span className="w-28 font-medium">Shelf Life:</span>
              <span>5–7 days when refrigerated</span>
            </div>
          </div>
        </div>
      </div>

      {/* How to Store */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">
          How to Store
        </h4>
        <p className="leading-relaxed">
          For optimal freshness, refrigerate strawberries unwashed in their
          original container or in a paper towel-lined container. Wash just
          before eating. To extend shelf life, remove any damaged berries as
          soon as possible.
        </p>
      </div>

    </div>
  )
  
}
