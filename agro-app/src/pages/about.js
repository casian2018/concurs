import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Despre Platforma Noastră
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O soluție inovatoare care conectează consumatorii cu produse agricole proaspete și sănătoase
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Misiunea Noastră
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-600 text-lg mb-6">
                Suntem dedicați promovării agriculturii locale și a alimentației sănătoase prin intermediul unei platforme care aduce produse proaspete direct de la fermieri la masa dumneavoastră.
              </p>
              <p className="text-gray-600 text-lg">
                Prin intermediul acestei platforme, susținem fermierii locali și oferim consumatorilor acces la produse de calitate, cu proveniență garantată.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Principiile Noastre
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 mr-3">1</span>
                  Proaspetețe Garantată
                </h3>
                <p className="text-gray-600">
                  Toate produsele sunt livrate în cel mai scurt timp posibil de la cules, menținând calitatea și valoarea nutrițională.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 mr-3">2</span>
                  Susținerea Fermierilor
                </h3>
                <p className="text-gray-600">
                  Creăm canale directe de distribuție care asigură remunerarea corectă a producătorilor locali.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 mr-3">3</span>
                  Transparență Totală
                </h3>
                <p className="text-gray-600">
                  Oferim informații complete despre proveniența și metoda de cultivare a fiecărui produs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Cum Funcționează
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Selecția Fermierilor</h3>
                    <p className="text-gray-600">
                      Fermierii noștri parteneri sunt aleși cu grijă, după criterii stricte de calitate și practici agricole sustenabile.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Colectarea Produselor</h3>
                    <p className="text-gray-600">
                      Produsele sunt culese la maturitatea optimă și pregătite pentru expediere în aceeași zi.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Livrare Rapidă</h3>
                    <p className="text-gray-600">
                      Utilizăm o rețea eficientă de distribuție care asigură că produsele ajunge proaspete la clienți.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;