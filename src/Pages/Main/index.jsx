import React, { useEffect, useState } from "react";
import Products from "../../components/Products";


export function Main() {
  return (
    <main className="relative w-full">
      <div className="relative w-full">
        <img
          className="w-full h-auto"
          src="https://reactjs-ecommerce-app.vercel.app/assets/main.png.jpg"
          alt="slider"
        />
        <div className="absolute inset-0 flex items-center bg-gradient-to-t from-black/60 to-transparent">
          <div className="text-white px-28">
            <h5 className="text-4xl  mb-4">New Season Arrivals</h5>
            <p className="text-lg">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </main>
  );
}
