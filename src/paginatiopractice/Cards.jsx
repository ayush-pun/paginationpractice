import React from "react";

const Cards = ({ product }) => {
  return (
    <div className="group cursor-pointer">

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
        />

        {/* subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
      </div>

      {/* Info */}
      <div className="pt-4 pb-5">

        <p className="text-xs tracking-widest text-gray-500 uppercase">
          {product.category}
        </p>

        <h3 className="mt-1 text-sm font-light text-black tracking-wide">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
          <span>Rating: {product.rating}</span>
          <span>{product.stock} in stock</span>
        </div>

        {/* Add to Cart Button (luxury minimal style) */}
        <button className="mt-4 w-full border border-black text-black py-2 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition duration-300">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default Cards;