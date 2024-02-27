import React from "react";

const BrandSideBar = ({ mobileOpen }) => {
  return (
    //
    <>
      {/* desktop sidebar */}
      <div className="hidden lg:flex w-[20%] fixed top-0 left-0 h-screen bg-[#091736]">
        BrandSideBar
      </div>
      {/* mobile sidebar */}
      <div
        className={
          mobileOpen
            ? "w-[20%] flex lg:hidden top-0 left-0 h-screen bg-[#091736] transition-all ease-in-out duration-300"
            : "hidden"
        }
      >
        BrandSideBar
      </div>
    </>
  );
};

export default BrandSideBar;
