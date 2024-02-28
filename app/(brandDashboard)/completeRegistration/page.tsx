import BrandProfilForm from "@/components/brandComponents/BrandProfilForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-[95%] mx-auto">
      <div className=" w-[90%] mx-auto bg-blue-950 my-4 rounded-md shadow-sm px-10 py-5">
        <div className="flex space-x-4 items-center">
          <div className="">
            <p className="text-md font-semibold text-white">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures
            </p>
          </div>
          <div className="">
            <Image
              src="/completDashboard.svg"
              alt="complete"
              width={100}
              height={100}
              className="w-[7rem]"
            />
          </div>
        </div>
      </div>
      <div className="w-[90%]  mx-auto">
        <BrandProfilForm />
      </div>
    </div>
  );
};

export default page;
