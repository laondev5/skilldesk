import { LayoutDashboard, FilePlus } from "lucide-react";
interface BrandNavInterface {
  label: string;
  path: string;
  icon: React.ReactNode;
}
export const RouteLink: BrandNavInterface[] = [
  { label: "Dashboard", path: "/home", icon: <LayoutDashboard /> },
  { label: "Add Job", path: "/createTask", icon: <FilePlus /> },
];
