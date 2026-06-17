import React, { useState } from "react";

const QuestionForm = () => {
  const [question, setQuestion] = useState({
    titre: "",
    description: "",
    categorie: "",
  });

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(question);
    alert("Question publiée avec succès !");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Poser une Question
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Titre */}
          <div>
            <label className="block font-semibold mb-2">
              Titre de la question
            </label>
            <input
              type="text"
              name="titre"
              value={question.titre}
              onChange={handleChange}
              placeholder="Ex: Comment utiliser React Router ?"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Catégorie */}
          <div>
            <label className="block font-semibold mb-2">
              Catégorie
            </label>
            <select
              name="categorie"
              value={question.categorie}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choisir une catégorie</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="MongoDB">MongoDB</option>
              <option value="Laravel">Laravel</option>
              <option value="Java">Java</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-2">
              Description détaillée
            </label>
            <textarea
              name="description"
              value={question.description}
              onChange={handleChange}
              rows="6"
              placeholder="Décrivez votre problème ou votre question..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Publier la question
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;