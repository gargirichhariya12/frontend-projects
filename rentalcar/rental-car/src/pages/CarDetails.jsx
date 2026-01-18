import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import { ArrowLeft, Fuel, Car, User, MapPin, BadgeCheck } from 'lucide-react'
import Loader from '../components/Loader'


const CarDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const currency = import.meta.env.VITE_CURRENCY
  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    setCar(dummyCarData.find(car => car._id === id))
  }, [id])
  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 " >
      <button onClick={() => navigate(-1)} className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'>
        <ArrowLeft />
        Back to all cars</button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className='lg:col-span-2'>
          <img src={car.image} alt={car.name} className='w-full h-auto object-cover rounded-lg mb-6' />
          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl font-bold '>{car.name} {car.model}</h1>
              <p className='text-gray-500 text-lg'> {car.category} ● {car.year} </p>
            </div>
            <hr className="border border-gray-300 my-6" />
            <div className='grid grid-col-2 sm:grid-cols-4 gap-4'>
              {[
                { icon: <User />, text: `${car.seating_capacity} Seats` },
                { icon: <Fuel />, text: car.fuel_type },
                { icon: <Car />, text: car.transmission },
                { icon: <MapPin />, text: car.fuel_type }

              ].map(({ icon, text }) => (
                <div key={text} className='flex flex-col items-center bg-gray-200 p-4 rounded-lg'>
                  {icon}
                  {text}

                </div>

              ))}
            </div>
            <div>
              <h1 className='text-xl font-medium mb-3'>Description</h1>
              <p className='text-gray-500'>{car.description}</p>
            </div>
            {/*Feature*/}
            <div>
              <h1 className='text-xl font-medium mb-3'>Feature</h1>
              <ul className='grid grid-cols-2 sm:grid-cols-2 gap-2'>
                {
                  ["360 Camera", "Bluetooth", "GPS", "Heated Seats", "Rear View Mirror"].map((items) => (
                    <li key={items} className='flex items-center text-gray-500'>
                      <BadgeCheck />
                      {items}
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>
        </div>
        {/*Booking Section*/}
        <form  onSubmit={handleSubmit} className='shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500'>
          <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>
            {currency} {car.pricePerDay}
            <span className='text-base text-gray-400 font-normal'> Per day</span>
          </p>
            <hr className='border-borderColor my-6' />

          <div className='flex flex-col gap-2'>
            <label htmlFor='pickup-date'>Pickup Date</label>
            <input type="date" className='border border-borderColor px-3 py-2 rounded-lg' required id='pickup-date' min={new Date().toISOString().split('T')[0]} />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='return-date'>Return Date</label>
            <input type="date" className='border border-borderColor px-3 py-2 rounded-lg' required id='return-date' />
          </div>
          <button className='w-full bg-blue-600 hover:bg-blue-700 py-3 transition-all font-medium text-white rounded-xl cursor-pointer'>
            Book Now
          </button>
          <p className='text-center text-sm'>No credit card required to reserve</p>
        </form>
      </div>


    </div>) : (<Loader />
  )
}

export default CarDetails
