import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

function Services() {
  return (
    <motion.div
      variants={(staggerContainer, fadeIn("up", "tween", 0.2, 1))}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col mx-5 md:mx-16 my-24 bg-yellow-100 px-6  py-7 rounded-lg"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-center mb-10"
      >
        <h1 className="text-yellow-300 tracking-wider">Our services</h1>
        <h1 className="text-lg md:text-xl tracking-wider ">
          Electronic Repair Services-Fast, Reliable Solutions for You
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-wrap justify-center items-center gap-3 mt-5"
      >
        <div className=" flex flex-row justify-center items-center w-full md:w-1/3   bg-white px-5 py-7 radius">
          <div className="w-14 bg-yellow-200 rounded-full p-2 mb-3">
            <img className="w-full" src="/repair.png" />
          </div>
          <div className="flex flex-col ml-4">
            <h1>HIGH-QUALITY PARTS</h1>
            <p className="text-md ">
              LML Repair only uses high-quality OEM and aftermarket parts for
              repairs
            </p>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center w-full md:w-1/3  bg-white px-5 py-7 radius">
          <div className="w-14 bg-yellow-200 rounded-full p-2 mb-3">
            <img className="w-full" src="/repair.png" />
          </div>
          <div className="flex flex-col ml-4">
            <h1>HIGH-QUALITY PARTS</h1>
            <p className="text-md ">
              LML Repair only uses high-quality OEM and aftermarket parts for
              repairs
            </p>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center w-full md:w-1/3  bg-white px-5 py-7 radius">
          <div className="w-14 bg-yellow-200 rounded-full p-2 mb-3">
            <img className="w-full" src="/repair.png" />
          </div>
          <div className="flex flex-col ml-4">
            <h1>HIGH-QUALITY PARTS</h1>
            <p className="text-md ">
              LML Repair only uses high-quality OEM and aftermarket parts for
              repairs
            </p>
          </div>
        </div>
        <img className="w-52" src="/service.png" />
        <div className=" flex flex-row justify-center items-center w-full md:w-1/3  bg-white px-5 py-7 radius">
          <div className="w-14 bg-yellow-200 rounded-full p-2 mb-3">
            <img className="w-full" src="/repair.png" />
          </div>
          <div className="flex flex-col ml-4">
            <h1>HIGH-QUALITY PARTS</h1>
            <p className="text-md ">
              LML Repair only uses high-quality OEM and aftermarket parts for
              repairs
            </p>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center w-full md:w-1/3  bg-white px-5 py-7 radius">
          <div className="w-14 bg-yellow-200 rounded-full p-2 mb-3">
            <img className="w-full" src="/repair.png" />
          </div>
          <div className="flex flex-col ml-4">
            <h1>HIGH-QUALITY PARTS</h1>
            <p className="text-md ">
              LML Repair only uses high-quality OEM and aftermarket parts for
              repairs
            </p>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center w-full md:w-1/3  bg-white px-5 py-7 radius">
          <div className="w-14 bg-yellow-200 rounded-full p-2 mb-3">
            <img className="w-full" src="/repair.png" />
          </div>
          <div className="flex flex-col ml-4">
            <h1>HIGH-QUALITY PARTS</h1>
            <p className="text-md ">
              LML Repair only uses high-quality OEM and aftermarket parts for
              repairs
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
