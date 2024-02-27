import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import BrandHeaderCard from "@/components/brandComponents/BrandHeaderCard";
import CompleteRegistrationButton from "@/components/brandComponents/CompleteRegistrationButton";
import BrandDataTable from "@/components/brandComponents/BrandDataTable";

const page = () => {
  return (
    <div className="">
      <div className="w-[95%] mx-auto">
        <BrandHeaderCard />
        <CompleteRegistrationButton />
        <BrandDataTable />
      </div>
    </div>
  );
};

export default page;
