import React from "react";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../constant/actions";
import { useNavigate } from "react-router-dom";
import "./index.css";
const TaskStatusScreen = () => {
  const [{ todoList }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const handleMoveTask = (key, index) => {
    console.log(key, index, "find key");
    if (key == "completed") {
      dispatch({
        type: actionTypes.TODOUPDATEFINAL,
        payload: { key, index },
      });
    } else if (key == "progress") {
      dispatch({
        type: actionTypes.TODOUPDATE,
        payload: { key, index },
      });
    } else if (key == "pending") {
      dispatch({
        type: actionTypes.TODOUPDATEFIRST,
        payload: { key, index },
      });
    }
  };

  const handleRemoveTask = (key, index, stage) => {
    console.log(key, "test test");
    dispatch({
      type: actionTypes.TODOREMOVE,
      payload: { key, index },
    });
    if (stage == "completed") {
      dispatch({ type: actionTypes.TODOREMOVEFINAL, payload: "" });
    } else if (stage == "progress") {
      dispatch({ type: actionTypes.TODOREMOVESEC, payload: "" });
    } else if (stage == "pending") {
      dispatch({ type: actionTypes.TODOREMOVEFIRST, payload: "" });
    }
  };
  const handleNavigation = () => {
    navigate("/");
  };
  console.log(todoList, "find todoList");
  return (
    <div className="parent__container">
      <div className="child__container">
        <div className="card__data">
          <h2>Pending</h2>
          {todoList?.map((item, index) => {
            if (item?.stage == "pending")
              return (
                <div className="card__data__container">
                  <div>
                    <div className="task__name" key={index}>
                      {item?.taskName}
                    </div>
                  </div>
                  <div className="action__container">
                    <div
                      className="button__container"
                      onClick={() => handleMoveTask("progress", index)}
                    >
                      Move
                    </div>
                    <div
                      className="button__container"
                      onClick={() =>
                        handleRemoveTask(item?.key, index, "pending")
                      }
                    >
                      Remove
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="card__data">
          <h2>On Progress</h2>
          {todoList?.map((item, index) => {
            if (item?.stage == "progress")
              return (
                <div className="card__data__container">
                  <div>
                    <div className="task__name" key={index}>
                      {item?.taskName}
                    </div>
                  </div>
                  <div className="action__container">
                    <div
                      className="button__container"
                      onClick={() => handleMoveTask("completed", index)}
                    >
                      Move
                    </div>
                    <div
                      className="button__container"
                      onClick={() =>
                        handleRemoveTask(item?.key, index, "progress")
                      }
                    >
                      Remove
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="card__data">
          <h2>Completed</h2>
          {todoList?.map((item, index) => {
            if (item?.stage == "completed")
              return (
                <div className="card__data__container">
                  <div>
                    <div className="task__name" key={index}>
                      {item?.taskName}
                    </div>
                  </div>
                  <div className="action__container">
                    <div
                      className="button__container"
                      onClick={() => handleMoveTask("pending", index)}
                    >
                      Move
                    </div>
                    <div
                      className="button__container"
                      onClick={() =>
                        handleRemoveTask(item?.key, index, "completed")
                      }
                    >
                      Remove
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
      <h1 onClick={handleNavigation}>Go to Task Add Page</h1>
    </div>
  );
};

export default TaskStatusScreen;
