import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import Vision from "./pages/Vision";
import Schools from "./pages/Schools";
import Students from "./pages/Students";
import Help from "./pages/Help";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import SchoolDetails from "./pages/SchoolDetails";
import Login from "./pages/Login";
import PreRegister from "./pages/PreRegister";
import SchoolRegister from "./pages/SchoolRegister";
import VolunteerRegister from "./pages/VolunteerRegister";
import Volunteers from "./pages/Volunteers";
import { AuthProvider } from "./context/AuthContext";
import SessionDetails from "./pages/SessionDetails";

function App() {
  const router = createHashRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <PreRegister /> },
    { path: "/school-register", element: <SchoolRegister /> },
    { path: "/volunteer-register", element: <VolunteerRegister /> },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/vision", element: <Vision /> },
        { path: "/schools", element: <Schools /> },
        { path: "/schooldetails", element: <SchoolDetails/>},
        { path: "/sessiondetails", element: <SessionDetails/>},
        { path: "/students", element: <Students /> },
        { path: "/help", element: <Help /> },
        { path: "/donate", element: <Donate /> },
        { path: "/contact", element: <Contact /> },
        { path: "/volunteers", element: <Volunteers /> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
