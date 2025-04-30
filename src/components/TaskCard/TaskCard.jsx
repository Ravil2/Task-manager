import React, { useState } from "react";
import dayjs from "dayjs";
import TaskButton from "../UI/Button/TaskButton";
import TaskModal from "../UI/Modal/TaskModal";

const TaskCard = ({ tasks }) => {
  const [modal, setModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="mt-4 sm:mt-0 border px-3 py-4 mb-4 rounded-lg flex flex-col gap-1"
        >
          <h3 className="font-semibold text-lg">Название: {task.name}</h3>
          <p className="font-semibold">Описание: {task.description}</p>
          <p className="font-semibold text-sm">
            Дата начала: <span>{dayjs(task.date).format("DD.MM.YYYY")}</span>
          </p>
          <p className="font-semibold">
            Приоритет:{" "}
            <span
              className={`px-1 py-0.5 border font-medium border-black rounded-sm cursor-pointer ${
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
          <TaskButton onClick={() => setSelectedTask(task)} setModal={setModal}>
            Открыть
          </TaskButton>
        </div>
      ))}
      {selectedTask && (
        <TaskModal
          name={selectedTask.name}
          description={selectedTask.description}
          date={selectedTask.date}
          priority={selectedTask.priority}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
};

export default TaskCard;
