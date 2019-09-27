import React, { useState } from "react";



const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>The count is: {count}.</h1>
      <button onClick={() => setCount(count + 1)}>Plus one</button>
      <button onClick={() => setCount(count - 1)}>Minus one</button>
    </div>
  );
};

export default App;
