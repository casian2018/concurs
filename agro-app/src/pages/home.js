import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleShopClick = () => navigate('/shop');
  const handleAboutClick = () => navigate('/about');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-white">
          <div className="max-w-screen-xl mx-auto px-4 py-24 lg:py-32 text-center">
            <div className="mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-8">
                Piața Fermierilor Locali
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Produse agricole proaspete și sănătoase, direct de la fermieri.<br/>
                Susținem agricultura locală și alimentația naturală.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <button
                  onClick={handleShopClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all 
                    transform hover:scale-105 shadow-lg hover:shadow-green-600/30"
                >
                  Magazinul Nostru
                </button>
                <button
                  onClick={handleAboutClick}
                  className="bg-transparent hover:bg-gray-100 border-2 border-green-600 
                    text-green-600 px-8 py-4 rounded-lg text-lg font-semibold 
                    transition-all transform hover:scale-105 shadow-sm hover:border-green-700 hover:text-green-700"
                >
                  Despre Noi
                </button>
              </div>
            </div>

            <div className="mt-24 border-t border-gray-200 pt-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Despre Platforma Noastră</h2>
                <p className="text-gray-600 text-lg leading-7">
                  Suntem o platformă dedicată promovării produselor agricole locale și sănătoase.
                  Toate produsele sunt atent selectate de la fermieri și producători locali,
                  garantând proaspetețea și calitatea superioară. Ne mândrim cu susținerea
                  comunităților rurale și promovarea unei alimentații naturale.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;