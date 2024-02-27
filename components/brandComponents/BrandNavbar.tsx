import React from "react";
import { Button } from "../ui/button";
import ProfileButton from "../ui/ProfileButton";
import Container from "../Container";
import Link from "next/link";
import { Bell } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
const BrandNavbar = ({ mobileOpen, setMobileOpen }) => {
  const handleMobileIcon = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {mobileOpen ? (
              <X onClick={() => handleMobileIcon()} />
            ) : (
              <Menu onClick={() => handleMobileIcon()} />
            )}

            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              Skilldesk
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon">
              <Bell />
            </Button>
            <div className="ml-3 relative">
              <ProfileButton />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandNavbar;
