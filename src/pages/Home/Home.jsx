import React from "react";
import { Link } from "react-router";
import TaskCard from "../../components/TaskCard/TaskCard";

const Home = ({ tasks }) => {
  return (
    <div className="w-full block sm:flex flex-col gap-4 flex-wrap md:flex-nowrap ">
      <div className="border-b pb-2">
        <h1 className="text-2xl font-bold">Главная страница</h1>
        <p className="text-md py-1 flex flex-col sm:flex-row gap-4 sm:gap-1">
          Тут будут отображенны все таски из{" "}
          <Link to="/add-task">
            <span className="bg-blue-200 border px-2 py-1 rounded-lg text-black">
              Добавления задач
            </span>
          </Link>
        </p>
      </div>
      <TaskCard tasks={tasks} />
    </div>
  );
};

export default Home;
