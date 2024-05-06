import React, { useEffect, useState } from "react";
import { actionTypes } from "../constant/actions";
import { useStateValue } from "../context/StateProvider";
import { useNavigate } from "react-router-dom";
import "./index.css";
const AddTaskScreen = () => {
  const [taskName, setTaskName] = useState("");
  const navigate = useNavigate();
  const [{ todoList, pendingState, progressState, completedState }, dispatch] =
    useStateValue();
  const handleAddTask = () => {
    if (taskName === "") {
      alert("Please add The Task");
      return;
    }
    const bodyData = {
      key: Date.now(),
      taskName: taskName,
      stage: "pending",
    };
    dispatch({ type: actionTypes.TODOADD, payload: bodyData });
    setTaskName("");
  };
  const handleNavigation = () => {
    navigate("/taskstatuspage");
  };

  console.log(todoList, "find todoList");
  return (
    <div className="parent__container">
      <div className="top__container">
        <h1>Add Task</h1>
        <input
          className="input__container"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></input>
        <div>
          <div onClick={handleAddTask} className="button__container">
            Add Task
          </div>
        </div>
      </div>
      <div>
        <h1>Task List</h1>
        <div className="card__container">
          <div>
            <h3>Pending State</h3>
            <div className="card__state__container">{pendingState}</div>
          </div>
          <div>
            <h3>Progress State</h3>
            <div className="card__state__container">{progressState}</div>
          </div>
          <div>
            <h3>Completed State</h3>
            <div className="card__state__container">{completedState}</div>
          </div>
        </div>
      </div>
      <h1 onClick={handleNavigation}>Go to Task Status Page</h1>
    </div>
  );
};

export default AddTaskScreen;
