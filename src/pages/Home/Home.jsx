import React, { useState } from "react";

const Home = ({ tasks }) => {
  return (
    <div>
      <h1>Home page</h1>
      {tasks.map((task, index) => (
        <div key={index} className="border p-2 mb-2">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Дата: {task.date}</p>
          <p>Приоритет: {task.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
