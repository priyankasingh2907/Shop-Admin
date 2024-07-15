import { AiFillPieChart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { CgArrowsExchangeV } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

export default function Milestones() {
  const data = [
    {
      icon: <BsCart2 />,
      title: "order completed",
      value: "1.27k",
    },
    {
      icon: <CgArrowsExchangeV />,
      title: "Total Revenue Made",
      value: "168k",
    },
    {
      icon: <FaUser />,
      title: "Total Store Visted",
      value: "2.5m",
    },
    {
      icon: <AiFillPieChart />,
      title: "Total Sales made",
      value: "52.172",
    },
  ];
  return (
    <div className="milestones">
      {/* {data.icon} */}
      {data.map((milestone, icon) => (
        <div className="milestone" key={milestone.value}>
          <div className="icon">{icon}</div>
          <div className="detail">
            <h4>{milestone.title}</h4>
            <h2>{milestone.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
