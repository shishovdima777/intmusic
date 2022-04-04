import { logo } from "../assets/images";
import { Links } from "./index";
function Burger({link1, link2, menuActive}) {
    console.log(menuActive)
  return (
    <div className={menuActive ? "burger-menu-active": "burger-menu"}>
      <div className="burger-menu-flex">
        <div>
          <img className="logo" src={logo} alt="intmusic logo" />
        </div>
        <nav>
          <ul className="burger-menu-child2">
            <li>
              <Links items={link1} />
            </li>
            <li className="horizontal-line"></li>
            <li className="burger-logins">
              <Links items={link2} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Burger;
