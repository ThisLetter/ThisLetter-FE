import React from "react";
import Router from "./shared/Router";
import HeaderTemp from "./components/templates/HeaderTemp";
import FooterTemp from "./components/templates/FooterTemp";
import BodyTemp from "./components/templates/BodyTemp";

function App() {
  return (
    <div className="App">
      <div
        className={"m-auto max-w-2xl shadow min-h-screen flex flex-col px-5"}
      >
        <HeaderTemp />
        <BodyTemp>
          <Router />
        </BodyTemp>
        <FooterTemp />
      </div>
    </div>
  );
}

export default App;
