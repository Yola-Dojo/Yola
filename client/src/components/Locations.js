import React from 'react'
import Map from './Map.js'

const Locations = () => {
  return (
    
    
    <div>
      <h2 className="font-bold text-5xl mx-auto text-center">Where to find Yola</h2>
      <div className="flex flex-col items-center">
        <p className="text-center mx-12 my-12 w-5/6">Find us in a store near you! As we grow, we are adding new locations to the map frequently. 
          If you would like to know which stores we supply, or you would like us to supply a store near you, 
          go to our "Contact Us" page and tell us where you are from and your preferred retail stores. 
          We appreciate your input!
        </p>
        <Map className="w-2/3 mx-auto"/>
      </div>
    </div>
  )
}

export default Locations