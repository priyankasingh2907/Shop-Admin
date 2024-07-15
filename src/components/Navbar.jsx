import { BiSearchAlt } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import avtar from "../assets/avatarImage.jpg";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <h2>Dashboard</h2>
        <span>Detailed information about your store</span>
      </div>
      <div className="container">
        <div className="search">
          <BiSearchAlt />
          <input type="text" name="" id="" placeholder="Search..." />
        </div>
        <div className="profile">
          <FiBell className="bell" />
          <div className="image">
            <img src={avtar} alt="avatar" />
          </div>
          <div className="profile_name">
            <h4>Priyanka Singh</h4>
            <h6>Admin</h6>
          </div>
          <BsFillCaretDownFill />
        </div>
      </div>
    </div>
  );
}
