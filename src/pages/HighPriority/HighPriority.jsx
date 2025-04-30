import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router";
import TaskCard from "../../components/TaskCard/TaskCard";

const HighPriority = ({ tasks }) => {
  const highPriorityTasks = tasks.filter(
    (task) => task.priority?.trim().toLowerCase() === "high"
  );
  return (
    <div>
      <div className="border-b pb-2 mb-4">
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
      <TaskCard tasks={highPriorityTasks} />
    </div>
  );
};

export default HighPriority;
