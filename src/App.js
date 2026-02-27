import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

/* ===== ADMIN ===== */
import AdminLayout from "./components/Admin/AdminLayout";
import Overview from "./components/Admin/pages/Overview";
import VaultPerformance from "./components/Admin/pages/VaultPerformance";
import CompartmentControl from "./components/Admin/pages/CompartmentControl";
import AISpoilage from "./components/Admin/pages/AISpoilage";
import Environment from "./components/Admin/pages/Environment";
import TransactionFlow from "./components/Admin/pages/TransactionFlow";
import DataLearning from "./components/Admin/pages/DataLearning";
import Alerts from "./components/Admin/pages/Alerts";
import Configuration from "./components/Admin/pages/Configuration";
import AccessSecurity from "./components/Admin/pages/AccessSecurity";

/* ===== FARMER ===== */
import FarmerLayout from "./components/Farmer/FarmerLayout";
import FarmerOverview from "./components/Farmer/Pages/Overview";
import FindVault from "./components/Farmer/Pages/FindVault";
import MyVaults from "./components/Farmer/Pages/MyVaults";
import BuyerChat from "./components/Farmer/Pages/BuyerChat";
import FarmerProfile from "./components/Farmer/Pages/Profile";

/* ===== BUYER (NEW) ===== */
import BuyerLayout from "./components/Buyer/BuyerLayout";
import BuyerOverview from "./components/Buyer/Pages/Overview";
import SearchProduce from "./components/Buyer/Pages/SearchProduce";
import MarketAnalysis from "./components/Buyer/Pages/MarketAnalysis";
import BuyerChatPage from "./components/Buyer/Pages/BuyerChat";
import BuyerProfile from "./components/Buyer/Pages/Profile";

import "./styles/theme.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* ===== BUYER ROUTES (UPDATED) ===== */}
        <Route path="/buyer" element={<BuyerLayout />}>
          <Route index element={<BuyerOverview />} />
          <Route path="search" element={<SearchProduce />} />
          <Route path="market" element={<MarketAnalysis />} />
          <Route path="chat" element={<BuyerChatPage />} />
          <Route path="profile" element={<BuyerProfile />} />
        </Route>

        {/* ===== FARMER ROUTES ===== */}
        <Route path="/farmer" element={<FarmerLayout />}>
          <Route index element={<FarmerOverview />} />
          <Route path="find-vault" element={<FindVault />} />
          <Route path="my-vaults" element={<MyVaults />} />
          <Route path="chat" element={<BuyerChat />} />
          <Route path="profile" element={<FarmerProfile />} />
        </Route>

        {/* ===== ADMIN ROUTES ===== */}
        <Route path="/monitor" element={<AdminLayout />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="vault-performance" element={<VaultPerformance />} />
          <Route path="compartment-control" element={<CompartmentControl />} />
          <Route path="ai-spoilage" element={<AISpoilage />} />
          <Route path="environment" element={<Environment />} />
          <Route path="access-security" element={<AccessSecurity />} />
          <Route path="transactions" element={<TransactionFlow />} />
          <Route path="data-learning" element={<DataLearning />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="configuration" element={<Configuration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
