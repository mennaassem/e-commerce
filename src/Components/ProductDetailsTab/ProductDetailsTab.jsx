import { useState } from 'react'
import DetailsTab from './DetailsTab'
import ReviewTabs from './ReviewTabs';
import ShippingTab from './ShippingTab';

export default function ProductDetailsTab({ product }) {

  const [active, setIsActive] = useState("details");

  function getActiveTab() {
    switch (active) {
      case "details":
        return <DetailsTab product={product} />;

      case "reviews":
        return <ReviewTabs />;

      case "shipping":
        return <ShippingTab />;

      default:
        return <DetailsTab product={product} />;
    }
  }

  return (
    <section id="product-details-tabs" className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg overflow-hidden">

          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                className={`px-6 py-4 font-medium ${
                  active === "details" &&
                  "text-primary-600 border-b-2 border-primary-600"
                }`}
                onClick={() => setIsActive("details")}
              >
                Product Details
              </button>

              <button
                className={`px-6 py-4 font-medium ${
                  active === "reviews" &&
                  "text-primary-600 border-b-2 border-primary-600"
                }`}
                onClick={() => setIsActive("reviews")}
              >
                Reviews (149)
              </button>

              <button
                className={`px-6 py-4 font-medium ${
                  active === "shipping" &&
                  "text-primary-600 border-b-2 border-primary-600"
                }`}
                onClick={() => setIsActive("shipping")}
              >
                Shipping &amp; Returns
              </button>
            </div>
          </div>

          <div className="p-6">
            {getActiveTab()}
          </div>

        </div>
      </div>
    </section>
  );
}
