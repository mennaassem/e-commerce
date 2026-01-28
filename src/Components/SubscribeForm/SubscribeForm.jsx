import React from 'react'

export default function SubscribeForm() {
  return (
    <>
    
    
     <section className="text-center border border-primary-300/30 bg-primary-300/20 w-full mt-7 px-4">
        <div  className="max-w-3xl mx-auto p-6 md:p-12 space-y-4">
            <h1 className="text-xl sm:text-2xl font-bold text-black">Subscribe to our Newsletter</h1>
            <p  className="text-gray-700 text-sm sm:text-base">Stay updated with our latest offers, recipes, and health tips.</p>
             <form className="w-full flex flex-col sm:flex-row items-center rounded">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:flex-1 px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none"
        />
        <button
          type="submit"
        className="bg-green-600 text-white  px-6 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
        </div>
     </section>
     
     
     
     </>
    
    
    
    
    
    
    
  )
}
