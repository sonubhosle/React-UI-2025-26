import React from 'react'
  const products = [
  {
    id: 1,
    name: "Organic Heirloom Tomato Seeds",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800&auto=format&fit=crop",
    price: 8.50,
    discount: 15,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Heavy Duty Garden Trowel",
    image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb375?q=80&w=800&auto=format&fit=crop",
    price: 24.99,
    discount: 0,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Nitrogen-Rich Liquid Fertilizer",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop",
    price: 35.00,
    discount: 20,
    rating: 4.7,
    reviews: 215
  },
  {
    id: 4,
    name: "Automatic Drip Irrigation Kit",
    image: "https://images.unsplash.com/photo-1590494056250-18dc0c393849?q=80&w=800&auto=format&fit=crop",
    price: 49.99,
    discount: 10,
    rating: 4.6,
    reviews: 56
  },
  {
    id: 5,
    name: "Premium Potting Soil Mix",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    price: 18.75,
    discount: 0,
    rating: 4.9,
    reviews: 342
  },
  {
    id: 6,
    name: "Eco-Friendly Compost Bin",
    image: "https://images.unsplash.com/photo-1588612502664-5a63973cb43f?q=80&w=800&auto=format&fit=crop",
    price: 65.00,
    discount: 25,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 7,
    name: "Professional Pruning Shears",
    image: "https://images.unsplash.com/photo-1600424598926-5b4819d20c5c?q=80&w=800&auto=format&fit=crop",
    price: 32.50,
    discount: 5,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 8,
    name: "Variety Herb Seed Pack",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop",
    price: 15.99,
    discount: 10,
    rating: 4.9,
    reviews: 203
  }
];
const Home = () => {


  return (
    <div className='bg-linear-to-r from-emerald-700/60 to-orange-400/40 h-screen'>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
 {
        products.map((prod,indx)=>{
          return(
            <div key={indx} className="bg-white border p-2 border-amber-300 rounded-xl">
                <img className='w-full h-40 rounded-xl' src={prod.image} alt={prod.name} />
                <p>{prod.name}</p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Home