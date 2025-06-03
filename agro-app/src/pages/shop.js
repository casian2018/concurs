import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

const Shop = () => {
  const categories = [
    {
      name: "Produse Lactate",
      path: "/dairy",
      image: "/images/lactate.jpg", // Path relative to public folder
      description: "Lapte proaspăt, iaurturi și brânzeturi de calitate"
    },
    {
      name: "Produse Carniere",
      path: "/meat",
      image: "/images/carne.jpg", // Path relative to public folder
      description: "Carne proaspătă de porc, vită și pui"
    },
    {
      name: "Legume Proaspete",
      path: "/vegetables",
      image: "/images/legume.jpg", // Path relative to public folder
      description: "Legume bio cultivate local"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-green-700">Magazinul Nostru</h1>
            <p className="text-xl text-gray-600 mt-4">Alegeți categoria de produse</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                to={category.path}
                key={category.path}
                className="group transition-transform hover:scale-[1.02]"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium text-center transition-colors">
                      Vezi produse
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;