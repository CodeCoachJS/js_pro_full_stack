export default function Index() {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <a href="/todos">Todos</a>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="/shop">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
