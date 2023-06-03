import React from 'react'
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
//import lottie from "lottie-web";
//import groovyWalkAnimation from "./76686-driver-management.json";


const Testanime = () => {
    const container = useRef(null);

  useEffect(() => {
   const instance= lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./99288-order-placed.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div className="container-lottie-placed" ref={container}>
    </div>
  )
}

export default Testanime
