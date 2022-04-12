import React from "react";
import { NavLink } from "react-router-dom";

import "./Menu.css";

export class Menu extends React.Component {
  render() {
    return (
      <div>
        <div className="menu">
          <div>
            <div className="menuItens">
              <div>
                <NavLink exact to="/" activeClassName="active">
                  Calculo
                </NavLink>
              </div>
              <div>
                <NavLink to="/Senador" activeClassName="active">
                  Senador
                </NavLink>
              </div>
              <div>
                <NavLink to="/Filiacoes" activeClassName="active">
                  Filiações
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
