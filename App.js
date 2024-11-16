import React from "react";
import ReactDOM from "react-dom";
import SwitchCase from "./src/components/SwitchCase/SwitchCase.js";

const App = () => {
  return (
    <>
      <SwitchCase
        value="20"
      />
    </>
  );
};
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
