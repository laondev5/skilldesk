import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

const page = () => {
  return (
    <div className="">
      <Container>
        <div className="flex flex-wrap justify-evenly items-center">
          <Card>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900">About</h1>
            </div>
            <div className="flex flex-col items-center justify-center"></div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900">About</h1>
            </div>
            <div className="flex flex-col items-center justify-center"></div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900">About</h1>
            </div>
            <div className="flex flex-col items-center justify-center"></div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default page;
