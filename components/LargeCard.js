import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-[500px] min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt=""
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-7xl mb-20 w-64 text-white">{title}</h3>

        <button className="text-sm text-black bg-white px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
