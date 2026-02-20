import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
const mobileSidebar = ({ setSidebar }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={() => setSidebar(false)}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
              JD
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Hello, John</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                Premium Member
              </p>
            </div>
          </div>

          <button
            className="text-gray-400 p-2 hover:bg-gray-50 rounded-full"
            onClick={() => setSidebar(false)}
          >
            <Icon icon="lucide:x" width={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink
            to="/"
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              `flex items-center justify-between p-3 rounded-xl font-semibold transition ${
                isActive
                  ? "bg-orange-50 text-[var(--navlink)]"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              `flex items-center justify-between p-3 rounded-xl font-semibold transition ${
                isActive
                  ? "bg-orange-50 text-[var(--navlink)]"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/order"
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              `flex items-center justify-between p-3 rounded-xl font-semibold transition ${
                isActive
                  ? "bg-orange-50 text-[var(--navlink)]"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            Order
          </NavLink>

          <NavLink
            to="/checkout"
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              `flex items-center justify-between p-3 rounded-xl font-semibold transition ${
                isActive
                  ? "bg-orange-50 text-[var(--navlink)]"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            Checkout
          </NavLink>
        </nav>

        {/* Footer Logo */}
        <div className="p-6 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ff6a3d] rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="md:w-6 w-4 h-4 md:h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#1b1b1b]">CraveBite</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default mobileSidebar;
