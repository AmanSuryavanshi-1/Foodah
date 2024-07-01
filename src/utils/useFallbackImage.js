// custom hook for providing random image throughout the project
import { useState } from "react";
import img1 from "../../Assets/1.jpg"; // Your fallback image
import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img4 from "../../Assets/4.jpg";
import img5 from "../../Assets/5.jpg";
import img6 from "../../Assets/6.jpg";
import img7 from "../../Assets/7.jpg";
import img8 from "../../Assets/Logo.png";
// Array of fallback images
const fallbackImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

const useFallbackImage = () => {

    const getRandomFallbackImage = () => {
        const randomIndex = Math.floor(Math.random() * fallbackImages.length);
        return fallbackImages[randomIndex];
      };
    
      // Function to handle image loading error
      const handleImageError = (e) => {
        e.target.src = getRandomFallbackImage();
      };
    
      return handleImageError;
    };

export default useFallbackImage;
