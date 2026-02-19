// src/components/Navbar.jsx
// import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";
import { useLocation } from "../context/location";

export default function Navbar({ onclick }) {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { city, setCity, cityList } = useLocation();

  return (
    <>
      <nav className="flex items-center justify-between py-3 px-2 md:p-4    bg-[var(--background)] sticky top-0 border-b border-[var(--border)] z-50">
        {/* Left */}
        {!sidebar && (
          <div className="flex md:hidden items-center md:gap-6 gap-3  ">
            <header className="flex  items-center gap-2 ">
              <div className="w-8 h-8  md:w-12  md:h-12 bg-[#ff6a3d] rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className=" md:w-6  w-4 h-4 md:h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                  />
                </svg>
              </div>
              <span className="md:text-2xl text-xl  font-bold text-[#1b1b1b]">
                CraveBite
              </span>
            </header>
            <div className=" items-center md:gap-2 md:px-3 md:py-2  flex gap-x-2 bg-[var(--secondary)] px-2 py-1 rounded-[var(--radius-xl)] text-[var(--secondary-foreground)] text-sm font-medium">
              <Icon icon="lucide:map-pin" width={16} />
              {/* <span className="md:block hidden">New York, NY</span>
            <span className="md:hidden block ">NY</span>
            <Icon icon="lucide:chevron-down" width={14} /> */}
              <select
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent outline-none w-24 text-[var(--secondary-foreground)] text-sm font-medium"
              >
                {cityList.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}, Ng
                  </option>
                ))}
              </select>
              {/* <Icon icon="lucide:chevron-down" width={14} /> */}
            </div>
          </div>
        )}
        <div className="  md:flex items-center md:gap-6 gap-3 hidden  ">
          <header className="flex  items-center gap-2 ">
            <div className="w-8 h-8  md:w-12  md:h-12 bg-[var(--LogoColor)] rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className=" md:w-6  w-4 h-4 md:h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                />
              </svg>
            </div>
            <span className="md:text-2xl text-xl  font-bold text-[#1b1b1b]">
              CraveBite
            </span>
          </header>
          <div className=" items-center md:gap-2 md:px-3 md:py-2  flex gap-x-2 bg-[var(--secondary)] px-2 py-1 rounded-[var(--radius-xl)] text-[var(--secondary-foreground)] text-sm font-medium">
            <Icon icon="lucide:map-pin" width={16} />
            {/* <span className="md:block hidden">New York, NY</span>
            <span className="md:hidden block ">NY</span>
            <Icon icon="lucide:chevron-down" width={14} /> */}
            <select
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent outline-none text-[var(--secondary-foreground)] text-sm font-medium"
            >
              {cityList.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}, Nigeria
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search */}
        <div className=" max-w-md hidden md:flex relative mx-10">
          {/* <input
          type="text"
          placeholder="Search food, groceries, drinks..."
          className="w-full py-3 pl-5 pr-12 bg-[var(--input)] border border-transparent rounded-[var(--radius-xl)] text-sm text-[var(--foreground)] outline-none"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]">
          <Icon icon="lucide:search" width={20} />
        </div> */}
          <ul className=" list-none text-[var(--primary)] flex justify-center items-center md:gap-x-8 font-semibold  ">
            <li className="hover:text-[var(--navlink)] cursor-pointer">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[var(--navlink)] cursor-pointer">
              {" "}
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:text-[var(--navlink)] cursor-pointer">
              {" "}
              <Link to="/order">Order</Link>
            </li>
            <li className="hover:text-[var(--navlink)] cursor-pointer">
              <Link to="/checkout">Checkout</Link>
            </li>
            {/* <li>menu</li> */}
          </ul>
        </div>

        {sidebar && (
          <>
            <div className=" md:hidden block">
              <div class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>

              <div class="fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform">
                <div class="p-6 border-b border-gray-100 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                      JD
                    </div>
                    <div>
                      <p class="text-sm font-bold text-gray-900">Hello, John</p>
                      <p class="text-[10px] text-gray-500 uppercase tracking-widest">
                        Premium Member
                      </p>
                    </div>
                  </div>
                  <button
                    class="text-gray-400 p-2 hover:bg-gray-50 rounded-full"
                    onClick={() => setSidebar(false)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                  {/* Home */}
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center justify-between p-3 rounded-xl font-semibold transition ${
                        isActive
                          ? "bg-orange-50 text-[var(--navlink)]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              isActive
                                ? "text-[var(--navlink)] bg-orange-100"
                                : "text-gray-700 bg-[var(--secondary)]"
                            }`}
                          >
                            <Icon
                              icon="lucide:house"
                              className={`${isActive ? "text-[var(--navlink)]" : "text-gray-700"} md:hidden block`}
                              width={16}
                            />
                          </span>
                          Home
                        </div>

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </NavLink>

                  {/* Order */}
                  <NavLink
                    to="/order"
                    className={({ isActive }) =>
                      `flex items-center justify-between p-3 rounded-xl font-semibold transition ${
                        isActive
                          ? "bg-orange-50 text-[var(--navlink)]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              isActive
                                ? "text-[var(--navlink)] bg-orange-100"
                                : "text-gray-700 bg-[var(--secondary)]"
                            }`}
                          >
                            <Icon
                              icon="lucide:shopping-cart"
                              className={`${isActive ? "text-[var(--navlink)]" : "text-gray-700"} md:hidden block`}
                              width={16}
                            />
                          </span>
                          Order
                        </div>

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </NavLink>

                  {/* Menu */}
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      `flex items-center justify-between p-3 rounded-xl font-semibold transition ${
                        isActive
                          ? "bg-orange-50 text-[var(--navlink)]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              isActive
                                ? "text-[var(--navlink)] bg-orange-100"
                                : "text-gray-700 bg-[var(--secondary)]"
                            }`}
                          >
                            <Icon
                              icon="lucide:square-menu"
                              className={`${isActive ? "text-[var(--navlink)]" : "text-gray-700"} md:hidden block`}
                              width={16}
                            />
                          </span>
                          Menu
                        </div>

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </NavLink>

                  {/* Checkout */}
                  <NavLink
                    to="/checkout"
                    className={({ isActive }) =>
                      `flex items-center justify-between p-3 rounded-xl font-semibold transition ${
                        isActive
                          ? "bg-orange-50 text-[var(--navlink)]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              isActive
                                ? "text-[var(--navlink)] bg-orange-100"
                                : "text-gray-700 bg-[var(--secondary)]"
                            }`}
                          >
                            <Icon
                              icon="lucide:credit-card"
                              className={`${isActive ? "text-[var(--navlink)]" : "text-gray-700"} md:hidden block`}
                              width={16}
                            />
                          </span>
                          Checkout
                        </div>

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </NavLink>
                </nav>

                <div className="p-6 border-t border-gray-100 mt-auto">
                  <button className="w-full cursor-text flex items-center gap-3  font-medium p-3 rounded-xl transition-colors">
                    <div className="w-8 h-8  md:w-12  md:h-12 bg-[#ff6a3d] rounded-md flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className=" md:w-6  w-4 h-4 md:h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                        />
                      </svg>
                    </div>
                    <span className="md:text-2xl text-xl  font-bold text-[#1b1b1b]">
                      CraveBite
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Actions */}
        <div className=" md:flex items-center hidden  md:gap-2 gap-2">
          {/* <button className="px-4 py-3 font-semibold">
          {" "}
          <Link to="/Auth">Sign In</Link>
        </button> */}
          {/* <button className="md:px-4 md:py-2 px-2 py-1 font-semibold text-sm  md:text-lg  rounded-[var(--radius-xl)] bg-[var(--primary)] text-[var(--primary-foreground)]">
            <Link to="/Signup">Sign Up</Link>
          </button> */}

          <button
            className="p-2 rounded-full bg-[var(--secondary)] flex items-center justify-center"
            onClick={() => navigate("/checkout")}
          >
            <Icon icon="lucide:shopping-bag" width={20} />
          </button>

          <Icon
            icon="lucide:menu"
            className="text-[--foreground] md:hidden block "
            width={16}
          />
        </div>

        {!sidebar && (
          <>
            {/* Actions */}
            <div className="flex items-center  md:hidden  md:gap-2 gap-2">
              {/* <button className="px-4 py-3 font-semibold">
          {" "}
          <Link to="/Auth">Sign In</Link>
        </button> */}
              {/* <button className="md:px-4 md:py-2 px-2 py-1 font-semibold text-sm  md:text-lg  rounded-[var(--radius-xl)] bg-[var(--primary)] text-[var(--primary-foreground)]">
            <Link to="/Signup">Sign Up</Link>
          </button> */}

              <button
                className="p-2 rounded-full bg-[var(--secondary)] flex items-center justify-center"
                onClick={() => navigate("/checkout")}
              >
                <Icon icon="lucide:shopping-bag" width={20} />
              </button>

              <Icon
                icon="lucide:menu"
                className="text-[--foreground] md:hidden cursor-pointer block "
                width={16}
                onClick={() => setSidebar(true)}
              />
            </div>
          </>
        )}
      </nav>
    </>
  );
}
