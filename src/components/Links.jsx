function Links({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={`${item}_${index}`}>
          <a href={item.href}>{item.value}</a>
        </li>
      ))}
    </ul>
  );
}
export default Links;
