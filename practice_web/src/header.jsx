import "./header.css";
import img from "./assets/singer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <>
      <div className="Hero">
        <div className="left_matter">
          <h1>JOIN THE CONCERT</h1><br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            inventore quo omnis similique consectetur laudantium vel
          </p><br></br>
          <div className="button">SCHEDULES</div>
          <div className="button">LEARN MORE</div>
        </div>

        <div className="menu_icon">
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </div>
        <hr className="dline"></hr>
        <div className="image">
          <img src={img} width="100%" height="100%"></img>
        </div>
        <div className="search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ffffff" }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
