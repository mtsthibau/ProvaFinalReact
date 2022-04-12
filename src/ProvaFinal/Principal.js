import React from "react";
import Calculo from "./Calculo";
import Senador from "./Senador";
import Filiacoes from "./Filiacoes";
import { Route, BrowserRouter } from "react-router-dom";
import { Menu } from "./componentes/Menu/Menu";

import "./Principal.css";

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div>
        <Route component={Calculo} exact path="/" />
        <Route component={Senador} path="/Senador" />
        <Route component={Filiacoes} path="/Filiacoes" />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
