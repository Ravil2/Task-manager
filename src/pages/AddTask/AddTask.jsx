import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/AddTaskForm/AddTaskForm";

const AddTask = () => {
  return (
    <>
      <div className="border-b pb-3">
        <h1 className="text-xl sm:text-2xl font-bold">
          Меню добавления задачи
        </h1>
        <p className="flex flex-wrap items-center gap-3">
          Добавьте задачу и она появится в
          <span className="bg-blue-200 border px-2 py-1 rounded-lg">
            <Link to="/high-priority" className="text-black">
              Главные задачи
            </Link>
          </span>
        </p>
      </div>

      <div className="max-w-lg mx-auto mt-10">
        <Form />
      </div>
    </>
  );
};

export default AddTask;
