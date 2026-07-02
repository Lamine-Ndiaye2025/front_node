import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const Deconnexion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-extrabold text-white">
          LEUZ
        </h1>
      </div>

      {/* Recherche */}
      <div className="w-[45%] relative">
        <input
          type="text"
          placeholder="Rechercher une question..."
          className="w-full py-3 pl-12 pr-4 rounded-full border-none outline-none shadow-md"
        />

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* Menu */}
      <div className="flex items-center gap-4">
        <NavLink
          to="/profil"
          className="flex items-center gap-2 text-white font-semibold hover:text-yellow-300"
        >
          <FaUserCircle size={22} />
          Profil
        </NavLink>

        {token ? (
          <button
            onClick={Deconnexion}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white font-bold shadow-md"
          >
            Déconnexion
          </button>
        ) : (
          <>
            <NavLink
              to="/connexion"
              className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-xl text-white font-bold shadow-md"
            >
              Connexion
            </NavLink>

            <NavLink
              to="/inscription"
              className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl text-white font-bold shadow-md"
            >
              Inscription
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;