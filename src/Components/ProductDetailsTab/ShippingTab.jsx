import React from 'react'

export default function ShippingTab() {
 return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">

      {/* Shipping Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Shipping Information
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex">
            <span className="w-24 font-medium">Standard:</span>
            <span>3–5 business days ($4.99)</span>
          </div>

          <div className="flex">
            <span className="w-24 font-medium">Express:</span>
            <span>1–2 business days ($9.99)</span>
          </div>

          <div className="flex">
            <span className="w-24 font-medium">Free shipping:</span>
            <span>Orders over $50</span>
          </div>
        </div>
      </div>

      {/* Return Policy */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Return Policy
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex">
            <span className="w-24 font-medium">Time limit:</span>
            <span>30 days</span>
          </div>

          <div className="flex">
            <span className="w-24 font-medium">Condition:</span>
            <span>Unopened original packaging</span>
          </div>

          <div className="flex">
            <span className="w-24 font-medium">Refund:</span>
            <span>Full refund available</span>
          </div>
        </div>
      </div>

    </div>
  );
}
