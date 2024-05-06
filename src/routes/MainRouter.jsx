import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTaskScreen from "../pages/AddTaskScreen";
import TaskStatusScreen from "../pages/TaskStatusScreen";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AddTaskScreen />}></Route>
      <Route path="/taskstatuspage" element={<TaskStatusScreen />}></Route>
    </Routes>
  );
};

export default MainRouter;
