import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProductCard from '../components/ProductCard';
import { meatProducts } from '../data/meatProducts';

const MeatShop = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-green-700">Produse Carniere</h1>
            <p className="text-gray-600 mt-2">Carne proaspătă de cea mai bună calitate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {meatProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MeatShop;