import Cart from "../Cart";
import { useState } from "react";
import { useEffect } from "react";

export default function Products() {

  const [cartData, setCartDatas] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=> async()=>{
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data)=>{
        setCartDatas(data);
        setFilteredProducts(data);
      })
  },[])

  function renderProducts(category){
    if(category === "all") {
      setFilteredProducts(cartData); //Show all products if category is all
    } else{
      setFilteredProducts(cartData.filter((cart) => cart.category === category));
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto pt-16">
      {/* Section Title */}
      <div className="text-center pt-5 pb-4">
        <h5 className="text-5xl">Latest Products</h5>
        <hr className="pb-16 mt-3" />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-x-3 mb-16">
        <button className="border border-black px-2.5 py-1.5 rounded" onClick={()=>renderProducts("all")}>All</button>
        <button className="border border-black px-4 py-1.5 rounded" onClick={()=>renderProducts("men's clothing")}>Men's clothing</button>
        <button className="border border-black px-4 py-1.5 rounded" onClick={()=>renderProducts("women's clothing")}>Women's clothing</button>
        <button className="border border-black px-4 py-1.5 rounded" onClick={()=>renderProducts("jewelery")}>Jewelry</button>
        <button className="border border-black px-4 py-1.5 rounded" onClick={()=>renderProducts("electronics")}>Electronics</button>
      </div>


      {/* {products part} */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-12">
        {
          filteredProducts.map(data=> <Cart
                                id={data.id} 
                                title={data.title} 
                                price={data.price} 
                                description={data.description} 
                                category={data.category} 
                                image={data.image}
                              />)
        }
      </div>
    </div>
  );
}
