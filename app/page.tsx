import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard'


const home = async() => {

  const allProducts = await getAllProducts();

  return (
    <>
      <section className='px-6 md:px-20 py-24'>
      <div className='flex max-xl:flex-col gap-16'>
      <div className='flex flex-col justify-center'>
        <p className='small text'>
          Best way to shop starts here
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </p>
        <h1 className='head-text'>
          Unleash the power of  
          <span className='text-primary'> PriceSpy</span>
        </h1>
        <p className='mt-6'>
        Discover the best deals effortlessly with PriceSpy! Our user-friendly app tracks price movements on your favorite e-commerce websites, ensuring you never miss out on discounts. Stay in control of your shopping budget and find the perfect time to make your purchase.
        </p>
        <Searchbar/>
      </div>
        <HeroCarousel/>
      </div>
      </section>
      <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>
      <div className='flex flex-wrap gap-x-2 gap-y-6'>
        {allProducts?.map((product) => (
          <ProductCard key = {product.id} product = 
          {product}/>
        ))}
      </div>
      </section>
    </>
  )
}

export default home