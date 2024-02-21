import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
