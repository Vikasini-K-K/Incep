export default function FarmerDashboard() {
  return (
    <div style={pageStyle}>
      <h1>Farmer Dashboard</h1>
      <p>Manage inventory, crop health, and sales.</p>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  padding: "40px",
  background: "var(--bg)",
  color: "var(--text)"
};
