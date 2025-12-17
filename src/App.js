import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <LandingPage onStart={() => setStarted(true)} />
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
