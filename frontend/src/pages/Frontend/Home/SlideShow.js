
import { useEffect, useState } from "react";
import sliderservices from "../../../services/SliderServices";
import { urlImage } from "../../../config";

function Slidershow() {
  const [sliders,setSliders]=useState([]);

  useEffect(function(){
      (async function(){
          await sliderservices.getByPosition('slidershow').then(function(result)
          {
              setSliders(result.data.sliders)
          });
      })();
  },[])
  return (
    <section className="myslider">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
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
        <div class="carousel-inner">
          {sliders.map(function (slider,index) {
            if (index === 0) {
              return (
                <div class="carousel-item active" key={index}>
                  <img src={urlImage+'slider/'+slider.image} class="d-block w-100" alt="..." height={450}/>
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              );
            } else {
              return (
                <div class="carousel-item" key={index}>
                  <img src={urlImage+'slider/'+slider.image} class="d-block w-100" alt="..." height={450}/>
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                </div>
              );
            }
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  ); 
}

export default Slidershow;
