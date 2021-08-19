import React from "react";

function AppContainer({ left, middle, right }) {
  return (
    <main>
      <div>{left}</div>
      <div>{middle}</div>
      <div>{right}</div>
    </main>
  );
}

export default AppContainer;
