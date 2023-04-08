import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductMenuItems } from "./ProductMenuItems";
import "./Dropdown.css";

function ProductMenu() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <section className="drop-section">
        <ul
          onClick={handleClick}
          className={click ? "drop-menu" : "dropdown-menu"}
        >
          {ProductMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="menu-items"
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default ProductMenu;
