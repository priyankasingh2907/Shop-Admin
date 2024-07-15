import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import "./scss/style.scss";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
