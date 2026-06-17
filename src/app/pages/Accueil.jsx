import React from "react";
import { NavLink } from "react-router-dom";
import Questions from "../../composants/Questions";

const Accueil = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

          <div>
            <h1 className="text-5xl font-bold mb-4">
              Bienvenue sur LEUZ
            </h1>

            <p className="text-lg text-gray-200 max-w-xl">
              Posez vos questions, partagez vos connaissances et trouvez
              rapidement des réponses auprès de la communauté.
            </p>
          </div>

          <NavLink
            to="/ajouter_question"
            className="mt-8 md:mt-0 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition duration-300"
          >
            + Ajouter une question
          </NavLink>
        </div>
      </div>

      {/* Section Questions */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Questions récentes
          </h2>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Communauté LEUZ
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Questions />
        </div>

      </div>
    </div>
  );
};

export default Accueil;