import {Link} from "react-router-dom";
function Links({ items }) {
  return (
    <ul>
      {items &&
      items.map((item, index) => (
        <li key={`${item}_${index}`}>
          <Link to={item.href}>{item.value}</Link>
        </li>
      ))}
    </ul>
  );
}
export default Links;
