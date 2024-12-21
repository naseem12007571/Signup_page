"use client"
export const Signup =() =>{
  return(
      <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 w-11/12 max-w-4xl bg-white rounded-lg shadow-lg">
     
        <div className="flex flex-col items-center justify-center bg-green-50 p-10">
          <div className="mb-8">
            <img
              src="/Vector.png" 
              alt="Payment Gateway Logo"
              className="w-20 h-20"
            />
          </div>
          <h1 className="text-2xl font-bold text-green-700">Payment gateway</h1>
          <p className="text-gray-500 mt-2">Enter school location details!</p>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-bold mb-6">Complete registration payment</h2>
          <form className="space-y-6">
        
          
            <div>
              <label className="block text-gray-700">Personal details</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Address line"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  className="input-field"
                />
              </div>
            </div>

         
            <div>
              <label className="block text-gray-700">Payment methods</label>
              <div className="flex items-center gap-4 mt-2">
                <img src="/credit-card.png" alt="Visa" className="h-10" />
                <img src="/credit-card2.png" alt="Stripe" className="h-10" />
                <img src="/credit-card3.png" alt="PayPal" className="h-10" />
                <img src="/credit-card4.png" alt="Mastercard" className="h-10" />
                <img src="/credit-card5.png" alt="Google Pay" className="h-10" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">Card details</label>
              <div className="space-y-4 mt-2">
                <input
                  type="text"
                  placeholder="Cardholder's name"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Card number"
                  className="input-field"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiry"
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="input-field"
                  />
                </div>
              </div>
            </div>

         
            <button className="w-full py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700">
              Next
            </button>
          </form>

      
          <div className="flex justify-between text-sm text-gray-500 mt-6">
            <a href="#instructions">Instructions</a>
            <a href="#license">License</a>
            <a href="#terms">Terms of Use</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  )
}