import { Link, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      <header>
        header - <Link to="/contact">Contact</Link>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}
