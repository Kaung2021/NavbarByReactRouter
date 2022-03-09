import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./SidebarData";
import "./Navigation.css";
const Navigation = () => {
  const [showItems, SetshowItems] = useState(false);
  const ControlItems = () => SetshowItems(!showItems);
  return (
    <div>
      <section>
        <div className="navbar">
          <Link to="#">
            <i className="fas fa-bars" onClick={ControlItems} />
          </Link>
        </div>
        {/* ------------------------- */}
        <nav className={showItems ? "navbar-menu active" : "navbar-menu"}>
          <ul onClick={ControlItems}>
            <Link>
              <i className="fas fa-times"></i>
            </Link>
            {data.map((item) => {
              return (
                <li key={item.id} className="nav-text">
                  <Link to={item.path}>
                    <span className="icon"> {item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navigation;
