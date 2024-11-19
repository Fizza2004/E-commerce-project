export default function Register(){
  return (
    <div className="max-w-screen-xl mx-auto pt-16">
      <div className="contact-section">
        <div className="contact-title text-center pt-5 pb-4">
          <h5 className="text-4xl mt-3">Register</h5>
          <hr className="mt-3 mb-2.5" />
        </div>

        <div class="contact-form max-w-md mx-auto my-8 p-6 bg-white ">
          <form action="#" class="space-y-4">
            <div>
              <label for="fname" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter your name"
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="px-6 py-2 bg-gray-600 text-white font-medium rounded-md shadow hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Send
              </button>
            </div>
            <div>
              <p>Already has an account?<span className="text-blue-400 underline underline-offset-1 ml-1"><a href="#">Login</a></span></p>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}