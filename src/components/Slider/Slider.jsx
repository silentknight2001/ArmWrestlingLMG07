import React, {useState, useCallback, useEffect} from 'react';
import slider_data from '../../assets/slider_data'
import "./Slider.css"

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = ()=>{
        setCurrentIndex((prevIndex)=> (prevIndex + 1) % slider_data.length);
    }
    const prevSlide = ()=>{
        setCurrentIndex((prevIndex)=> (prevIndex - 1 + slider_data.length) % slider_data.length);
    }
    useEffect(()=>{
        const interval = setInterval(nextSlide,4000);
        return () =>clearInterval(interval);
    },[])

  return (
    <>
    <div className="carousel">
     <div className="carousel-image">
        <img src={slider_data[currentIndex]} alt={`Slide ${currentIndex + 1}`} 
        // style={{ width: "100%", height: "796px", objectFit: "cover" }}
        />
     </div>
    </div>
    <div>
        <button className='carousel-prev' onClick={prevSlide}>prev</button>
        <button className='carousel-next' onClick={nextSlide}>next</button>
    </div>
    </>
  )
};

export default Slider