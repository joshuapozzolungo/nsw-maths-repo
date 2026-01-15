import { Outlet } from "react-router-dom";
import Header from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

export default function Layout() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
