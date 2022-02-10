import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Image
        src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg"
        layout="fill"
        objectFit="cover"
        alt="hero-image"
      />

      <div className="absolute top-1/2 w-full text-center text-white">
        <p className="text-lg font-bold sm:text-xl">
          Not sure where to go? Perfect.
        </p>

        <button className="text-purple-800 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Hero;
