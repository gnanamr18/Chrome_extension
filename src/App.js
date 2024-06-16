import GoogleSlides from "./Components/GoogleSlides";
import PomodoroTimer from "./Components/PomodoroTimer";
import ScribbleNotes from "./Components/ScribbleNotes";
import "./App.css"; // Import your CSS file
import Books from "./Components/Books";

function App() {
  return (
    <div className="container">
      <div className="container d-flex flex-column ">
        <div className=" container d-flex justify-content-center justify-items-center m-4">
          <h1 className="text-center text-danger">Hi Folks!</h1>
        </div>
        <div className="container">
          <div className="d-flex  flex-column flex-md-row justify-content-between m-4">
            <GoogleSlides />
            <PomodoroTimer />
            <ScribbleNotes />
            <Books />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
