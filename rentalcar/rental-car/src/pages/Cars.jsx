import React from 'react'
import Title from '../components/Title'
import {Search , Funnel} from 'lucide-react'
import { useState } from 'react'
import { dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'

const Cars = () => {
   const {input , setInput} = useState('')
  return (
    <div>
      {/* heading and filter with searchbar */}
      <div className='flex flex-col items-center py-20 bg-gray-100 max-md:px-4'>
        <Title title ='Available Cars' subtitle='Browse our selection of premium vehicles available for your next adventure' />
        {/* filter and search bar */}
        <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>
         <Search  className='text-gray-400 mr-2'/>
         <input onClick = {(e) =>{
          setInput(e.target.value)
         }} value = {input} type="text" placeholder='Search by make, model, or Feature' className='w-full h-full outline-none text-gray-500' />
         <Funnel  className='text-gray-400 ml-2'/>

        </div>

      </div>

      {/* car listing */}
      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
        <p className='text-gray-500 xl:px-24 max-w-7xl mx-auto' >Showing {dummyCarData.length} Cars</p>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 xl:px-20 max-w-7xl mx-auto'>
          {dummyCarData.map((car, index) => (
            <div key = {index}>
              <CarCard car={car} />
            </div>

          ))}
          </div>
      </div>
      
    </div>
  )
}

export default Cars
