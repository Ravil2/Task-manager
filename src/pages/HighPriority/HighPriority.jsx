import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router";

const HighPriority = ({ tasks }) => {
  const highPriorityTasks = tasks.filter((task) => task.priority === "high");
  return (
    <div>
      <div className="border-b pb-2">
        <h1 className="text-2xl font-bold">Главная задачи</h1>
        <p className="text-md py-1 flex flex-col sm:flex-row gap-4 sm:gap-1">
          Тут будут отображенны все таски с высоким приоритетом из{" "}
          <Link to="/">
            <span className="bg-red-200 border px-2 py-1 rounded-lg text-black">
              Главной страницы
            </span>
          </Link>
        </p>
      </div>
      {highPriorityTasks.map((task, index) => (
        <div
          key={index}
          className="mt-4 border px-3 py-4 mb-4 rounded-lg flex flex-col gap-1"
        >
          <h3 className="font-semibold text-lg">Название: {task.name}</h3>
          <p className="font-semibold">Описание: {task.description}</p>
          <p className="font-semibold text-sm">
            Дата начала: <span>{dayjs(task.date).format("DD.MM.YYYY")}</span>
          </p>
          <p className="font-semibold">
            Приоритет:{" "}
            <span
              className={`px-1 py-0.5 border font-medium border-black rounded-sm cursor-pointer bg-red-200`}
            >
              {task.priority === "high" && "Высокий"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default HighPriority;
