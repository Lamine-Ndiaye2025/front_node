import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const URL_BACK=import.meta.env.VITE_URL_BACK;

const Inscription = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();

    if (!prenom || !nom || !email || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const data = {
      prenom,
      nom,
      email,
      password,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/connexion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Inscription réussie ✔️");
        navigate("/connexion");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Erreur serveur");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            Inscription
          </h1>

          <p className="text-gray-500 mt-2">
            Rejoignez la communauté LEUZ
          </p>
        </div>

        <form onSubmit={Register} className="space-y-4">

          <div>
            <label className="block font-semibold mb-2">
              Prénom
            </label>

            <input
              type="text"
              placeholder="Votre prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Nom
            </label>

            <input
              type="text"
              placeholder="Votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="exemple@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Mot de passe
            </label>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition duration-300 shadow-lg"
          >
            Créer un compte
          </button>

          <div className="text-center mt-4">
            <span className="text-gray-600">
              Vous avez déjà un compte ?
            </span>

            <Link
              to="/connexion"
              className="ml-2 text-green-600 font-bold hover:underline"
            >
              Se connecter
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Inscription;