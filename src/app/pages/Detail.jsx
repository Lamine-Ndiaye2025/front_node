import React from "react";

const Detail = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">
            Comment utiliser React Router ?
          </h1>

          <div className="flex gap-4 text-gray-500 text-sm mb-6">
            <span>Auteur : Lamine Ndiaye</span>
            <span>15 Juin 2026</span>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Bonjour, je voudrais comprendre comment utiliser React Router
            pour naviguer entre plusieurs pages dans une application React.
            Pouvez-vous me donner un exemple simple ?
          </p>
        </div>

        {/* Réponses */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Réponses
          </h2>

          <div className="border-l-4 border-green-500 pl-4 py-2 mb-4">
            <p className="font-semibold">Moussa Diop</p>
            <p className="text-gray-700">
              Tu peux utiliser BrowserRouter, Routes et Route.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <p className="font-semibold">Fatou Ndiaye</p>
            <p className="text-gray-700">
              N'oublie pas d'installer react-router-dom avec npm.
            </p>
          </div>
        </div>

        {/* Ajouter une réponse */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Ajouter une réponse
          </h2>

          <textarea
            placeholder="Écrivez votre réponse..."
            rows="5"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
            Publier la réponse
          </button>
        </div>

      </div>
    </div>
  );
};

export default Detail;