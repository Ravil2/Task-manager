import React from "react";
import dayjs from "dayjs";

const Home = ({ tasks }) => {
  return (
    <div className="w-full flex-wrap md:flex-nowrap ">
      <h1 className="text-2xl font-bold pb-4">Home page</h1>
      {tasks.map((task, index) => (
        <div key={index} className="border p-2 mb-2 ">
          <h3>Название: {task.name}</h3>
          <p>Описание: {task.description}</p>
          <p>Дата начала: {dayjs(task.date).format("DD.MM.YYYY")}</p>
          <p>
            Приоритет:{" "}
            <span
              className={`px-1 py-0.5 border font-medium border-black rounded-sm ${
                task.priority === "high"
                  ? "bg-red-200"
                  : task.priority === "medium"
                  ? "bg-orange-200"
                  : "bg-blue-200"
              }`}
            >
              {task.priority === "high" && "Высокий"}
              {task.priority === "medium" && "Средний"}
              {task.priority === "low" && "Низкий"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
