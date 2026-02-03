import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-servier";
import Loading from "../../Components/Loading/Loading";
import ProductCard from "../../Components/ProductCard/ProductCard";
 

 

export default function AllDeals() {
  const [alldeals, setIsAllDeals] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  async function fetchAllDeals() {
    setIsLoading(true);
    try {
      const response = await getAllProducts();
      if (response.success) {
        const deals = response.data.data || [];
        setIsAllDeals(deals);

        const filteredDeals = deals.filter(
          product => product.priceAfterDiscount
        );
        setTotalPages(Math.ceil(filteredDeals.length / limit));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllDeals();
  }, []);

  if (loading) return <Loading/>;

  const dealsWithDiscount =
    alldeals?.filter(product => product.priceAfterDiscount) || [];

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentDeals = dealsWithDiscount.slice(startIndex, endIndex);

  return (
    <div className="py-5">
          <h2 className="text-3xl  font-bold mb-3 text-center bg-gray-100 p-3">All Deals</h2>
      <div className="container">
       

        <div className="py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {currentDeals.map(product => (
            <ProductCard key={product.id} productInfo={product} />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`px-3 py-1 rounded ${
                page === index + 1
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
