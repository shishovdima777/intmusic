import React from "react";
import "../scss/popup.scss";

function PopUp({ items}) {
  console.log(`hello`);
  return (
    <div className="popup-wrapper">
      <ul>
        {items.map((link, index) => (
          <li key={`${link}_${index}`}>
            <a href={link.href}>{link.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopUp;
