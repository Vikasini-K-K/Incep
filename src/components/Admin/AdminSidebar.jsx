import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      
      {/* LOGO */}
      <div className="logo">
        <h2>Sun-Vault Hive</h2>
      </div>

      {/* NAVIGATION */}
      <nav>
        <NavLink to="overview">System Overview</NavLink>
        <NavLink to="vault-performance">Vault Performance</NavLink>
        <NavLink to="compartment-control">Compartment Control</NavLink>
        <NavLink to="ai-spoilage">AI Spoilage Intelligence</NavLink>
        <NavLink to="environment">Environmental Impact</NavLink>
        <NavLink to="access-security">Access & Security</NavLink>
        <NavLink to="transactions">Transaction Flow</NavLink>
        <NavLink to="data-learning">Data & Learning</NavLink>
        <NavLink to="alerts">Alerts & Maintenance</NavLink>
        <NavLink to="configuration">System Configuration</NavLink>
      </nav>

    </div>
  );
}
