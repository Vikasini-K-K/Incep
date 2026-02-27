import { NavLink } from "react-router-dom";
import "./BuyerSidebar.css";

export default function BuyerSidebar() {

  return (

    <div className="buyer-sidebar">

      <h2>BUYER</h2>

      <nav>

        <NavLink to="/buyer">
          Overview
        </NavLink>

        <NavLink to="/buyer/search">
          Search Produce
        </NavLink>

        <NavLink to="/buyer/market">
          Market Prices
        </NavLink>

        <NavLink to="/buyer/chat">
          Farmer Chat
        </NavLink>

        <NavLink to="/buyer/profile">
          Profile
        </NavLink>

      </nav>

    </div>

  );
}