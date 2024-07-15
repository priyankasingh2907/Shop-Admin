import { BiChevronRight } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";

import Title from "./Title";

export default function StoreVisits() {
  const data = [
    {
      title: "Men",
      value: 30,
    },
    {
      title: "Women",
      value: 70,
    },
    {
      title: "Visits/day",
      value: 60,
    },
  ];
  return (
    <div className="storeVistis">
      <Title title="store visits" subTitle="Details about your store visits" />
      <div className="anayltics">
        <div className="icon">
          <RiGroupLine />
        </div>
        <div className="content">
          <div className="title">
            <h4>Pro Analytics</h4>
            <span>$112/mo</span>
          </div>
          <BiChevronRight />
        </div>
      </div>
      <div className="progress_bars">
        {data.map((item) => (
          <div key={item.title} className="progress_bar">
            <div className="title">
              {" "}
              <h5>{item.title}</h5>
              <h6>{item.value}%</h6>
            </div>
            <progress value={item.value} max="100" />
          </div>
        ))}
      </div>
    </div>
  );
}
