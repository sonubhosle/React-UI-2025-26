import React from 'react'
import { products } from '../Data/Products'
import { Link } from 'react-router-dom'
import SectionHeading from '../Components/SectionHeading/SectionHeading'
import { Navigation, Zap } from 'lucide-react'

const Home = () => {


  return (
    <div className='bg-linear-to-r from-emerald-700/60 to-orange-400/40 h-screen'>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          products.map((prod, indx) => {
            return (
              <Link to={`/product/${prod.id}`} key={indx} className="bg-white border p-2 border-amber-300 rounded-xl">
                <img className='w-full h-40 rounded-xl' src={prod.image} alt={prod.name} />
                <p>{prod.name}</p>
              </Link>
            )
          })
        }
      </div>
      <SectionHeading main_heading={'Blogs'} sub_heading={'Articals'}
        desc={'Our Latest Blogs & Articals'} icon={<Zap />} />
      <section>Articals</section>00
      <SectionHeading main_heading={'React Out'} sub_heading={'Newsletter'}
        desc={'Dont Spam Here'} icon={<Navigation />} />
      <section>Newaletter</section>
      {
        [1, 1, 1, 1, 1,].map((item, index) => {
          return (
            <p className='m-40'> ghj</p>
          )
        })
      }
    </div>
  )
}

export default Home