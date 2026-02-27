import { Outlet } from "react-router-dom";
import FarmerSidebar from "./FarmerSidebar";
import "./FarmerLayout.css";

export default function FarmerLayout() {
  return (
    <div className="farmer-layout">
      <FarmerSidebar />
      <main className="farmer-content">
        <Outlet />
      </main>
    </div>
  );
}
