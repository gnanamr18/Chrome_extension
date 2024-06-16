import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
      console.log(interval);
    } else {
      clearInterval(interval);
    }

    if (timeLeft === 0) {
      clearInterval(interval);
      setShowModal(true);
      setIsActive(false);
      setIsPaused(false);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
var boolean
  const handleStartPause = () => {
    setIsActive(!isActive);
    // boolean = false;
    if (isActive && !isPaused) {
        setIsPaused(true); // Pause the timer
      }
      else{
        setIsPaused(false)
      }
  };

//   useEffect(() => {
//     if (isActive === true) {
//       setIsPaused(false);
//     }
//     if (isActive && boolean === false) {
//         console.log('hi')
//       setIsPaused(true);
//     }
//   }, [isActive,boolean]);

  console.log(isActive, isPaused);

  const handleReset = () => {
    setTimeLeft(25 * 60);
    setIsActive(false);
    setIsPaused(false);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
    <div>
    <div className="card m-4" style={{ width: "18rem", height: "18rem" }}>
      {/* <p className="text-center text-danger">Pomodoro Timer</p> */}
      <div className="card text-center m-2">
        <h5 className="text-center text-danger">Pomodoro Timer</h5>

        <div className="card-body">
          <h4>{formatTime(timeLeft)}</h4>
          <button className="btn btn-sm btn-primary" onClick={handleStartPause}>
            {/* {isActive ? (isPaused ? "Resume" : "Pause") : "Start"} */}
            {/* {!isActive ? "Start" : isPaused ? "Resume" : "Pause"} */}
            {!isActive && !isPaused
              ? "Start"
              : isActive && !isPaused
              ? "Pause"
              : !isActive && isPaused
              ? "Resume"
              : null}
          </button>
          <button
            className="btn btn-sm btn-danger mx-2 ml-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control m-2 border border-3"
          style={{ height: "2.5rem" }}
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="input-group-append m-3">
          <button
            className="btn btn-success btn-sm "
            type="button"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      </div>
      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            {task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Pomodoro Finished</h5>
              </div>
              <div className="modal-body">
                <p>Pomodoro time is finished. Take a break!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default PomodoroTimer;
