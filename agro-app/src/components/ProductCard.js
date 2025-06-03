// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all h-full flex flex-col border border-gray-200">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
        <div className="text-green-600 font-bold text-xl">
          {product.price} {product.unit}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;