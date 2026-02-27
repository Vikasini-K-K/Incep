import "./Profile.css";

export default function Profile() {
  return (
    <div className="farmer-profile-page">
      <h1 className="page-title">My Profile</h1>

      <div className="card profile-card">
        <div className="profile-row">
          <span className="label">Farmer Name</span>
          <span className="value">Ramesh Kumar</span>
        </div>

        <div className="profile-row">
          <span className="label">Location</span>
          <span className="value">Coimbatore, Tamil Nadu</span>
        </div>

        <div className="profile-row">
          <span className="label">Phone</span>
          <span className="value">+91 9XXXXXXXXX</span>
        </div>

        <div className="profile-row">
          <span className="label">Registered Hubs</span>
          <span className="value">3</span>
        </div>

        <div className="profile-row">
          <span className="label">Active Vaults</span>
          <span className="value">2</span>
        </div>
      </div>
    </div>
  );
}
