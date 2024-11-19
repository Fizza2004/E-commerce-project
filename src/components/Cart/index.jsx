function Cart({id,category,title,price,description,image}){
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className="p-4 bg-white shadow-md border border-black rounded" id={id}>
          <div className="card">
            <div className="card-header mb-6">
              <img
                className="w-full h-64 bg-cover bg-center"
                src={image}
                alt="Product"
              />
            </div>
            <div className="card-info">
              <p className="text-xl font-semibold text-center mb-2.5">
                {title.substr(0,13)}...
              </p>
              <p className="text-center mb-3 h-16">
                {truncateText(description, 100)}
              </p>
            </div>
            <div className="card-price">
              <p className="text-xl text-center py-2.5 border border-black">
                {price}$
              </p>
            </div>
            <div className="card-buttons flex justify-center items-center gap-x-2 mt-3 h-10">
              <button className="border border-black px-4 py-1.5 rounded bg-black text-white">
                Buy Now
              </button>
              <button className="border border-black px-4 py-1.5 rounded bg-black text-white">
                Add to Cart
              </button>
            </div>
          </div>
    </div>
  )
}

export default Cart;