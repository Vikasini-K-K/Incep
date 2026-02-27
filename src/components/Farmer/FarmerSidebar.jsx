import { NavLink } from "react-router-dom";
import "./FarmerSidebar.css";

export default function FarmerSidebar() {
  return (
    <aside className="farmer-sidebar">
      <h2 className="logo">Sun-Vault Hive</h2>
      <nav>
        <NavLink to="">Dashboard</NavLink>
        <NavLink to="find-vault">Find Vault</NavLink>
        <NavLink to="my-vaults">My Vaults</NavLink>
        <NavLink to="chat">Buyer Chat</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>
    </aside>
  );
}
