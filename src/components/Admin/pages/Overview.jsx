import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview-page">
      <h1 className="page-title">System Overview</h1>

      {/* ===== KPI GRID ===== */}
      <div className="overview-grid">

        <div className="card metric-card">
          <div className="metric-header">
            <h3>Central Cooling Temperature</h3>
            <span className="metric-icon">❄</span>
          </div>
          <div className="metric-value">4.1°C</div>
          <div className="metric-sub">Stable & Optimal</div>
        </div>

        <div className="card metric-card">
          <div className="metric-header">
            <h3>Solar Power Output</h3>
            <span className="metric-icon">☀</span>
          </div>
          <div className="metric-value">6.8 kW</div>
          <div className="metric-sub">Live Generation</div>
        </div>

        <div className="card metric-card">
          <div className="metric-header">
            <h3>Active Vaults</h3>
            <span className="metric-icon">🧊</span>
          </div>
          <div className="metric-value">4</div>
          <div className="metric-sub">Currently in Use</div>
        </div>

        <div className="card metric-card">
          <div className="metric-header">
            <h3>Available Vaults</h3>
            <span className="metric-icon">📦</span>
          </div>
          <div className="metric-value">2</div>
          <div className="metric-sub">Ready for Allocation</div>
        </div>

        <div className="card metric-card">
          <div className="metric-header">
            <h3>Outside Climate</h3>
            <span className="metric-icon">🌡</span>
          </div>
          <div className="metric-value">32°C</div>
          <div className="metric-sub">Humidity: 68%</div>
        </div>

        <div className="card metric-card">
          <div className="metric-header">
            <h3>Energy Storage Level</h3>
            <span className="metric-icon">🔋</span>
          </div>
          <div className="metric-value">78%</div>
          <div className="metric-sub">Battery Capacity</div>
        </div>

      </div>

      {/* ===== SYSTEM STATUS BAR ===== */}
      <div className="card system-status">
        <div className="status-item">
          <span className="status-label">Cooling Load</span>
          <span className="status-value">MEDIUM</span>
        </div>

        <div className="status-item">
          <span className="status-label">System Health</span>
          <span className="status-value success">NORMAL</span>
        </div>

        <div className="status-item">
          <span className="status-label">Last Update</span>
          <span className="status-value">2 mins ago</span>
        </div>
      </div>

      {/* ===== GRAPH SECTION ===== */}
      <div className="card graph-card">
        <h3>Central Temperature Trend</h3>
        <div className="dummy-graph">
          Temperature trend graph will appear here
        </div>
      </div>
    </div>
  );
}
