// src/components/Navbar.jsx
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useLocation } from "../context/location";
import RouteLoader from "../components/loaders/routesLoader";
import MobileSidebar from "./mobileSidebar";
import NavberResponsive from "./NavberResponsive";

export default function Navbar({ onclick }) {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { city, setCity, cityList } = useLocation();

  return (
    <>
      <NavberResponsive
        city={city}
        setCity={setCity}
        cityList={cityList}
        navigate={navigate}
        setSidebar={setSidebar}
        sidebar={sidebar}
      />

      {/* ================= SIDEBAR (UNCHANGED STRUCTURE) ================= */}
      {sidebar && <MobileSidebar setSidebar={setSidebar} />}
    </>
  );
}
