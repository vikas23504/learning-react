import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  console.log("Render hua");
  console.log("Function:", handleClick);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default App;