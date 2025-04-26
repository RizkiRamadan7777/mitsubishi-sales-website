export default function VehicleCard({ vehicle }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
      <div className="relative h-64">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        {vehicle.isBestSeller && (
          <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm">
            Best Seller
          </span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-red-500 font-bold text-2xl">
            {vehicle.price}
          </span>
          <span className="text-gray-400 line-through">{vehicle.oldPrice}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <TruckIcon className="w-5 h-5 text-red-500" />
            <span>{vehicle.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <CogIcon className="w-5 h-5 text-red-500" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>
        
        <a 
          href={`/products/${vehicle.slug}`}
          className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition"
        >
          Lihat Detail
        </a>
      </div>
    </div>
  )
}
