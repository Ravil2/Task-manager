import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import AddTask from "../../pages/AddTask/AddTask";
import Completed from "../../pages/Completed/Completed";
import HighPriority from "../../pages/HighPriority/HighPriority";
import InProgress from "../../pages/InProgress/InPorgress";

const Routing = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks)

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route
          path="/add-task"
          element={<AddTask onAddTask={handleAddTask} />}
        />
        <Route path="/completed" element={<Completed />} />
        <Route path="/high-priority" element={<HighPriority tasks={tasks} />} />
        <Route path="/in-progress" element={<InProgress />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default Routing;
