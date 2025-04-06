import { Slide } from "react-slideshow-image";
import { useEffect, useState } from "react";

const SlideShow = () => {
  const [imgArray, setImgArray] = useState<{url: string}[]>([]);

  useEffect(() => {
    setInterval(() => {
      fetch('/photos')
        .then((response) => response.json())
        .then((images) => {
          setImgArray(images)
        })
    }, 2000)
  }, [])


  return (
    <Slide 
      autoplay={true}
      duration={1000}
      transitionDuration={500}
      infinite={true}
    >
      {imgArray.map((img, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center bg-center bg-contain bg-no-repeat h-screen" 
          style={{ 'backgroundImage': `url(${img.url})` }}>
        </div>
        )
      )}
    </Slide>
  )
}

export default SlideShow