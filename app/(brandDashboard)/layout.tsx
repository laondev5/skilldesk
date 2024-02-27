"use client";
import React, { useState } from "react";
import BrandSideBar from "@/components/brandComponents/BrandSideBar";
import BrandNavbar from "@/components/brandComponents/BrandNavbar";

// interface MyComponentState {
//   mobileOpen: boolean;
// }
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <html lang="en">
      <body className="w-full">
        <BrandNavbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div className="flex relative">
          {/* desktop */}
          <div className=" hidden lg:flex w-[20%] fixed top-0 left-0 h-screen bg-[#091736]">
            <BrandSideBar mobileOpen={mobileOpen} />
          </div>
          {/* mobile */}
          <div
            className={
              mobileOpen
                ? "w-[70%] flex lg:hidden absolute top-0 left-0 z-10 h-screen bg-[#091736] transition-all ease-in-out duration-300"
                : "hidden"
            }
          >
            <BrandSideBar mobileOpen={mobileOpen} />
          </div>
          <div className="w-[100%] bg-gray-50 h-[2000px]">{children}</div>
        </div>

        {children}
      </body>
    </html>
  );
}
