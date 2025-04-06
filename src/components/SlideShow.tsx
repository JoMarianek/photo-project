import { Slide } from "react-slideshow-image";
import { useEffect, useState } from "react";

const SlideShow = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const [imgArray, setImgArray] = useState<{url: string}[]>([]);

  useEffect(() => {
    setInterval(() => {
      fetch('https://eef2-88-64-225-234.ngrok-free.app/photos')
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