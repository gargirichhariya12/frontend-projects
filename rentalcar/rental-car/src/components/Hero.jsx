import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { Search } from 'lucide-react'

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('')
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-14 bg-[var(--color-light)] pt-24">
      <h1 className="text-4xl md:text-5xl font-semibold">
        Luxury cars on rent
      </h1>
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-[var(--color-white)] shadow-[0px_8px_20px_rgba(0,0,0,0.1 )] ">
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center min-md:ml-8 ">
          <div className='flex flex-col items-start gap-2'>
            <select required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
              <option value="">pickup location</option>
              {cityList.map((city) => <option key={city} value={city} >{city}</option>)}
            </select>
            <p className="px-1 text-sm text-gray-500">{pickupLocation ? pickupLocation : 'Please select your Location'}</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className="text-gray-500" required />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input type="date" id="return-date" className="text-gray-500" required />
          </div>

          <button className='flex flex-row  rounded-full bg-[var(--color-primary)] text-white p-2 gap-2 ml-4'>
           Search {<Search />}
          </button>
        </div>
      </form>

      <img
        src={assets.main_car}
        alt="car"
        className="max-h-72 object-contain"
      />
    </div>
  )
}

export default Hero
