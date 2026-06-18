import React from "react";

const Profil = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-4xl">

        {/* En-tête */}
        <div className="flex flex-col items-center">
          <img
            src="https://ui-avatars.com/api/?name=Lamine+Ndiaye&background=2563eb&color=fff&size=200"
            alt="profil"
            className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg"
          />

          <h1 className="text-3xl font-bold mt-4">
            Lamine Ndiaye
          </h1>

          <p className="text-gray-500">
            laminendiaye0444@gmail
          </p>

          
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-blue-50 p-6 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-blue-600">12</h2>
            <p className="text-gray-600">Questions</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-green-600">25</h2>
            <p className="text-gray-600">Réponses</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-yellow-600">150</h2>
            <p className="text-gray-600">Points</p>
          </div>

        </div>

        {/* Informations */}
        <div className="mt-10 bg-gray-50 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Informations personnelles
          </h2>

          <div className="space-y-3">
            <p>
              <span className="font-semibold">Nom :</span> Lamine Ndiaye
            </p>

            <p>
              <span className="font-semibold">Email :</span> lamine@gmail.com
            </p>

            <p>
              <span className="font-semibold">Rôle :</span> Utilisateur
            </p>

            <p>
              <span className="font-semibold">Membre depuis :</span> Juin 2026
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profil;