import React from "react";

const Home = ({ tasks }) => {
  return (
    <div className="w-full flex flex-col flex-wrap md:flex-nowrap">
      <h1>Home page</h1>
      {tasks.map((task, index) => (
        <div key={index} className="border p-2 mb-2">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Дата: {task.date}</p>
          <p>
            Приоритет:
            {task.priority === "high" && "Высокий"}
            {task.priority === "medium" && "Средний"}
            {task.priority === "low" && "Низкий"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
