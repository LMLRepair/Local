import React from "react";

export default function Gallery() {
  return (
    <div className="flex flex-col grid-row-2 mx-5  md:mx-24 my-14 justify-center items-center  ">
      <div className="text-center mb-14">
        <h1 className="text-yellow-300 tracking-wider">gallery</h1>
        <h1 className="text-xl md:text-2xl tracking-wider">
          Explore our Repair Gallery
        </h1>
      </div>
      <div className="flex flex-wrap grid-col-2 md:grid-cols-3 gap-4 justify-center items-center">
        <div className="flex md:flex-col gap-4">
          <img
            className="rounded-lg w-36 h-36 md:w-72 md:h-80 "
            src="/images/gallery/pic1.jpg"
          />
          <img
            className="rounded-lg  w-36 h-36 md:w-72 md:h-52 "
            src="/images/gallery/pic2.jpg"
          />
        </div>
        <div className="flex md:flex-col gap-4">
          <img
            className="rounded-lg w-36 h-36 md:w-72 md:h-52 "
            src="/images/gallery/pic4.jpg"
          />
          <img
            className="rounded-lg  w-36 h-36 md:w-72 md:h-80 "
            src="/images/gallery/pic3.jpg"
          />
        </div>

        <div className="flex md:flex-col gap-4">
          <img
            className="rounded-lg w-36 h-36 md:w-72 md:h-80 "
            src="/images/gallery/pic5.jpg"
          />
          <img
            className="rounded-lg  w-36 h-36 md:w-72 md:h-52 "
            src="/images/gallery/pic1.jpg"
          />
        </div>
      </div>
    </div>
  );
}
