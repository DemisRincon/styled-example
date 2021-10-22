import React from "react";
import Navbar from "./components/ModifiedContainer";
import { Container } from "./components/styled";

const App = () => {
  return (
    <>
      <Navbar />
      <Container  >
        <div>hello</div>
        <div>hello2</div>
      </Container>
    </>
  );
};

export default App;
