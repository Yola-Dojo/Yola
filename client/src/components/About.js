import React from 'react'
import Penguin from '../images/IMG_3849.jpg'
import Pic2 from '../images/IMG_3806.jpeg'
import Pic3 from '../images/YOLA_UNIT.jpeg'
import Pic4 from '../images/IMG_0433.jpg'

const About = () => {
  return (
    
    <div>
      <section class="overflow-hidden text-gray-700">
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div class="flex flex-col items-center">
            <p className="w-11/12 text-center text-3xl mb-10 pt-6 font-light tracking-wide flex-wrap">
              S&B Sustainable Products LLC, headquartered in Atherton, California, was founded in 2014 by its two founders Steve Hooper and Bob MacLean.<br/>
              With the incredible growth in sales of yogurt products throughout the United States in the last 15 years, it was clear that consumers were looking for healthier, good tasting, multi-use dairy products. But there was one food category that had lagged behind: Dairy Toppings. 
              S&B set out to upgrade that category with a healthy, “clean ingredient”, competitive product that was unique, felt better and tasted better.
            </p>
            <div class="flex flex-wrap w-1/2 h-1/2">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Penguin}/>
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-2/3 rounded-lg"
                  src={Pic3}/>
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-2/3 rounded-lg"
                  src={Pic4}/>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <h2>About component</h2>
      
    </div>
    
    
  )
}

export default About