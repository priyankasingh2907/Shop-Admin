import Milestones from "./Milestones";
import Navbar from "./Navbar";
import Revenue from "./Revenue";
import StoreVisits from "./StoreVisits";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Navbar />
      <div className="grid">
        <div className="one">
          <Milestones />
        </div>
        <div className="two">
          <Revenue />
          <StoreVisits />
        </div>
      </div>
    </div>
  );
}
