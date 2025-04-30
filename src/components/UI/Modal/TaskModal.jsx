import React from "react";
import dayjs from "dayjs";
import { CloseOutlined } from "@ant-design/icons";

const TaskModal = ({ name, description, date, priority, onClose }) => {
  const getPriorityStyles = () => {
    switch (priority) {
      case "high":
        return "bg-red-200 text-red-800";
      case "medium":
        return "bg-orange-200 text-orange-800";
      case "low":
        return "bg-blue-200 text-blue-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const getPriorityLabel = () => {
    switch (priority) {
      case "high":
        return "Высокий";
      case "medium":
        return "Средний";
      case "low":
        return "Низкий";
      default:
        return "Неизвестный";
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center z-50">
      <div className="w-[90%] sm:w-1/2 max-h-[80%] overflow-y-auto rounded-2xl border bg-stone-50/90 shadow-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-lg font-bold text-gray-600 cursor-pointer"
        >
          <CloseOutlined />
        </button>

        <h3 className="text-2xl font-bold mb-4">
          Название: <span className="font-medium">{name}</span>
        </h3>

        <p className="text-lg font-semibold mb-2">Описание:</p>
        <p className="bg-white border p-3 rounded-md text-gray-700 mb-4">
          {description}
        </p>

        <p className="text-base mb-2 font-medium">
          Дата:{" "}
          <span className="font-normal">
            {dayjs(date).isValid()
              ? dayjs(date).format("DD.MM.YYYY")
              : "Неизвестно"}
          </span>
        </p>

        <p className="text-base font-medium">
          Приоритет:{" "}
          <span
            className={`inline-block px-2 py-1 rounded-md font-semibold border ${getPriorityStyles()}`}
          >
            {getPriorityLabel()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TaskModal;
