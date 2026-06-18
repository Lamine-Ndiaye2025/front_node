import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const URL_BACK = import.meta.env.VITE_URL_BACK;

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Laconnexion = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      const response = await fetch(`${URL_BACK}/api/auth/connexion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const texte = await response.text();

      if (!texte) {
        throw new Error("Réponse vide du serveur");
      }

      const result = JSON.parse(texte);

      if (response.ok) {
        localStorage.setItem("token", result.token);
        alert(`Connexion réussie ${result.user.prenom} ${result.user.nom}`);
        navigate("/");
      } else {
        alert(result.message || "Erreur de connexion");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur serveur : " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Connexion
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Connectez-vous à votre compte LEUZ
        </p>

        <form onSubmit={Laconnexion} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Adresse email</label>
            <input
              type="email"
              placeholder="exemple@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Mot de passe</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300"
          >
            Se connecter
          </button>

          <div className="text-center mt-4">
            <span className="text-gray-600">Vous n'avez pas de compte ?</span>
            <Link
              to="/inscription"
              className="ml-2 text-green-600 font-bold hover:underline"
            >
              S'inscrire
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;