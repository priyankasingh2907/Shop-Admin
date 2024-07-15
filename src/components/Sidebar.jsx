import { BiHelpCircle } from "react-icons/bi";
import { FiSettings, FiShoppingBag } from "react-icons/fi";
import { GiSchoolBag } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import rocket from "../assets/rocket.png";
import { RiTruckLine } from "react-icons/ri";

export default function Sidebar() {
  const links1 = [
    {
      text: "overview",
      icon: <FiShoppingBag />,
      active: true,
    },
    {
      text: "Orders",
      icon: <HiOutlineShoppingCart />,
    },
    {
      text: "Customers",
      icon: <GiSchoolBag />,
    },
    {
      text: "Transaction",
      icon: <IoWalletOutline />,
    },
    {
      text: "Shipment",
      icon: <RiTruckLine />,
    },
  ];

  const links2 = [
    {
      text: "Help Center",
      icon: BiHelpCircle,
    },
    {
      text: "Settings",
      icon: FiSettings,
    },
    {
      text: "Logout",
      icon: MdLogout,
    },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="brand">ShopStop {links1.icon}</div>
        <div className="links">
          <ul>
            {links1.map(({ text, icon, active }) => (
              <li key={text} className={active ? "active" : ""}>
                <a href="#">
                  {" "}
                  {icon} {text}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {links2.map((link) => (
              <li key={link.text} className={link.active ? "active" : ""}>
                <a href="#">
                  {<link.icon />}
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pro">
          <div className="image">
            <img src={rocket} alt="rocket" />
          </div>
          <h3>ShopStopPro</h3>
          <h5>Get Access to all</h5>
          <button>Get Pro</button>{" "}
        </div>
      </div>
    </>
  );
}
