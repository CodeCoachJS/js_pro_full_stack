export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Your One Stop Shop App</h1>
      <ul>
        <li>
          <a target="_self" href="/todos" rel="noreferrer">
            Todos
          </a>
        </li>
        <li>
          <a target="_self" href="/shop" rel="noreferrer">
            Shop
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
