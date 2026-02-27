import BuyerSidebar from "./BuyerSidebar";
import { Outlet } from "react-router-dom";
import "./BuyerLayout.css";

export default function BuyerLayout() {
  return (
    <div className="buyer-layout">

      <BuyerSidebar />

      <div className="buyer-content">
        <Outlet />
      </div>

    </div>
  );
}