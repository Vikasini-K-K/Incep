export default function AdminDashboard() {
  return (
    <div style={pageStyle}>
      <h1>Monitoring Dashboard</h1>
      <p>System health, AI analytics, and vault monitoring.</p>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  padding: "40px",
  background: "var(--bg)",
  color: "var(--text)"
};
