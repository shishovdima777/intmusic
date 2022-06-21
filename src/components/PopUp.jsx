import React from "react";
import "../scss/popup.scss";
import { Link } from "react-router-dom";

function PopUp({ items}) {
  return (
    <div className="popup-wrapper">
      <ul>
        {items.map((link, index) => (
          <li key={`${link}_${index}`}>
            <Link to={link.href}>{link.value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopUp;
