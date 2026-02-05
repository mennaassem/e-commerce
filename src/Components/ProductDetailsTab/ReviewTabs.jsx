import React from 'react'

export default function ReviewTabs() {
return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Customer Reviews
          </h3>

          <div className="flex items-center gap-2 mt-1">
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
            <span className="text-sm text-gray-600">
              4.5 out of 5
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Based on 149 reviews
          </p>
        </div>

        <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition">
          Write a Review
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4 border-t pt-4">

        {/* Review 1 */}
        <div className="border-b pb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
              <span className="font-medium text-gray-900">
                John D.
              </span>
            </div>

            <span className="text-xs text-gray-500">
              2 days ago
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            “Absolutely delicious! The strawberries were fresh, sweet, and
            perfectly ripe. Will definitely order again.”
          </p>
        </div>

        {/* Review 2 */}
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-sm">
                ★★★★☆
              </div>
              <span className="font-medium text-gray-900">
                Sarah M.
              </span>
            </div>

            <span className="text-xs text-gray-500">
              1 week ago
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            “Great quality organic strawberries. They lasted longer than
            expected in the fridge.”
          </p>
        </div>

      </div>
    </div>
  );
}
