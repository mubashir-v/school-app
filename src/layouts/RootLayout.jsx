import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Navbar) */}
      <Header />
      {/* Main Content (Outlet for Nested Routes) */}
      <div className="flex-1 mt-20 flex flex-col overflow-scroll">
        <main className="flex p-4 w-full flex-1">
          <Outlet />
        </main>
       <Footer/>
      </div>

      {/* Footer */}
    </div>
  );
}

export default RootLayout;
