import Navbar from '../components/Navbar'
import WhatsAppFloat from '../components/WhatsAppFloat'
import vehicles from '../data/vehicles'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 bg-black/60">
          <img 
            src="/images/hero.jpg" 
            alt="Mitsubishi Showroom"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Mitsubishi Jambi
              <span className="block text-red-500 mt-2">Lisa Suryani Purba</span>
            </h1>
            <p className="text-xl mb-8">Dealer Resmi Mitsubishi Terpercaya di Jambi</p>
            <a 
              href="https://wa.me/6282173541831"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2"
            >
              <img src="/images/whatsapp.svg" className="w-6 h-6" alt="WhatsApp" />
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Produk Unggulan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.slice(0, 3).map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>
      
      <WhatsAppFloat />
    </div>
  )
}
