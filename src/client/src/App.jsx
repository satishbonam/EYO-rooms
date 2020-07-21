import React from "react";
import { Route } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return <Route path="/" component={Routes} />;
}

export default App;
