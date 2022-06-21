import { logo } from "../assets/images";
import { Links } from "./index";
import { useEffect, useRef } from "react";
function Burger({ link1, link2, menuActive, setMenuActive, buttonRef }) {
  const sortRef = useRef();
  const toggleOutside = (e) => {
    if (
      !e.path.includes(sortRef.current) &&
      !e.path.includes(buttonRef.current)
    ) {
      setMenuActive(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", toggleOutside);
  }, []);
  return (
    <div
      ref={sortRef}
      className={menuActive ? "burger-menu burger-menu-active" : "burger-menu"}
    >
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
