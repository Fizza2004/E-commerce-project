export default function About(){
  return(
    <div className="max-w-screen-xl mx-auto pt-16">
      <div className="about-section">
        <div className="about-info text-center pt-5 pb-4">
          <h5 className="text-4xl mt-3">About Us</h5>
          <hr className="mt-3 mb-2.5" />
          <p className="text-xl text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea, eos error sunt quidem dolorum iste non. Recusandae, dignissimos laborum, laudantium inventore non eum et similique est voluptatum optio impedit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste est laborum corrupti sunt magni aut aspernatur nihil veritatis labore excepturi, illo ipsam doloremque velit rem dolores, eum, omnis voluptatum? Ut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae vero aspernatur exercitationem id? Non, eius quae iure aliquam perspiciatis quam optio! Eum obcaecati vitae numquam ab iusto beatae facilis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, maxime dolores eius reprehenderit animi perspiciatis cum voluptates veniam ducimus architecto, magni ratione impedit at modi, reiciendis quas illo voluptatem natus!</p>
        </div>

        <div className="product-types text-center">
          <h5 className="text-4xl mt-3 mb-3">Our Products</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-12">
            <div className="card border border-black rounded">
              <div className="card-image mb-6">
                <img
                  className="w-full h-64 bg-cover bg-center"
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="card-title">
                <p className="text-xl font-semibold text-center mb-2.5">
                  Men's clothing
                </p>
              </div>
            </div>
            <div className="card border border-black rounded">
              <div className="card-image mb-6">
                <img
                  className="w-full h-64 bg-cover bg-center"
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="card-title">
                <p className="text-xl font-semibold text-center mb-2.5">
                  Women's clothing
                </p>
              </div>
            </div>
            <div className="card border border-black rounded">
              <div className="card-image mb-6">
                <img
                  className="w-full h-64 bg-cover bg-center"
                  src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="card-title">
                <p className="text-xl font-semibold text-center mb-2.5">
                  Jewellery
                </p>
              </div>
            </div>
            <div className="card border border-black rounded">
              <div className="card-image mb-6">
                <img
                  className="w-full h-64 bg-cover bg-center"
                  src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="card-title">
                <p className="text-xl font-semibold text-center mb-2.5">
                  Electronics
                </p>
              </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}