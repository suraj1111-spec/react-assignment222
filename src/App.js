import React from "react";
import Home from "./pages/Home/Home";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
