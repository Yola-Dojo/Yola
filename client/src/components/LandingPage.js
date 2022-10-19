import React from 'react'
import testPhoto from './testphoto.png'
import Pic1 from '../images/IMG_3806.jpeg'
import Pic2 from '../images/002.png'
import Pic3 from '../images/006.png'
import Pic4 from '../images/009.png'

const LandingPage = () => {





  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide relative w-2/3 mx-auto" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src={Pic2}
              class="block w-full"
              alt="..."
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-4xl">Great with breakfast!</h5>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src={Pic3}
              class="block w-full"
              alt="..."
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-4xl">Deliciously healthy with fruits!</h5>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src={Pic4}
              class="block w-full"
              alt="..."
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-4xl">Perfect for hot beverages!</h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default LandingPage

{/* <div className='landingPage'>
        <div>
        <img 
        src = {testPhoto}
        style = {{
            height:'275px',
            borderRadius:'8px',
            boxShadow:'3px 3px 4px gray'
        }}
        />
        </div>
        <div style={{width:'300px'}}>
            <p style={{wordWrap:'break-word'}}>jfjsdafkldsjflkjsjjfjsdlkfjklsdjfkjsdfjsjfkjkjfkldjskfljskdljfksjfklklsadjfkljsaklfjksdjfkjdsklfjksljfkljsafkljsdklfjklsdjfkjsdkfljsdklfjklsdjfkljsfkljfskdljfklsdjklsdj</p>
        </div>
    </div> */}