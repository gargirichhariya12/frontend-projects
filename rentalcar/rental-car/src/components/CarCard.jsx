import { Car, Fuel, MapPin, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CarCard({ car }) {
    const currency = import.meta.env.VITE_CURRENCY || '$';
    const navigate = useNavigate();

    return (
        <div onClick={() => {navigate(`/CarDetails/${car._id}`);scrollTo(0, 0);}} className='group rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white'>
            <div className='relative h-48 overflow-hidden'>
                <img src={car.image} alt={car.name} className='w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover' />
                {car.isAvailable && <p className='absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs px-2.5 py-1 rounded-full'>Available</p>}
                <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
                    <span className='font-semibold'>{currency}{car.pricePreDay}</span>
                    <span> /day</span>
                </div>
            </div>
            <div className='p-4 sm:p-5'>
                <div className='flex items-start justify-between mb-2'>
                    <div>
                        <h3 className='text-lg font-medium'>{car.brand} {car.name}</h3>
                        <p className='text-muted-foregrounded text-sm'>{car.category} * {car.year}</p>
                    </div>
                </div>
                <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
                    <div className='flex items-center text-sm text-muted-foreground'>
                        <User />
                        <span>{car.seating_capacity} seats</span>
                    </div>
                    <div className='flex items-center text-sm text-muted-foreground'>
                        <Fuel />
                        <span>{car.fuel_type} </span>
                    </div>
                    <div className='flex items-center text-sm text-muted-foreground'>
                        <Car />
                        <span>{car.transmission} </span>
                    </div>
                    <div className='flex items-center text-sm text-muted-foreground'>
                        <MapPin />
                        <span>{car.location} </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CarCard
