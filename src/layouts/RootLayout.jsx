import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Navbar) */}
      <Header />
      {/* Main Content (Outlet for Nested Routes) */}
      <div className="flex-1 mt-16 flex flex-col overflow-scroll">
        <main className="flex p- w-full flex-1 p-2 bg-slate-100">
          <Outlet />
        </main>
       <Footer/>
      </div>

      {/* Footer */}
    </div>
  );
}

export default RootLayout;
