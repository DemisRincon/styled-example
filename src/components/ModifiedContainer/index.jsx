import React from "react";
import { ModifiedContainer } from "./styled";

const Navbar = () => {
  const list = [1, 2, 3];
  return (
    <ModifiedContainer >
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </ModifiedContainer>
  );
};

export default Navbar;
