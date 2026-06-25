import { FaEdit, FaTrash } from "react-icons/fa";

const QuestionCard = ({ question, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 shadow bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">
        {question.titre}
      </h2>

      <p className="text-gray-600 mt-2">
        {question.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          <p>{question.auteur}</p>
          <p>{question.heure}</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(question)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2"
          >
            <FaEdit />
            Modifier
          </button>

          <button
            onClick={() => onDelete(question.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded flex items-center gap-2"
          >
            <FaTrash />
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;