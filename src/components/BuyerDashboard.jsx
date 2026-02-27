export default function BuyerDashboard() {
  return (
    <div style={pageStyle}>
      <h1>Buyer Dashboard</h1>
      <p>View available produce and place purchase requests.</p>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  padding: "40px",
  background: "var(--bg)",
  color: "var(--text)"
};
