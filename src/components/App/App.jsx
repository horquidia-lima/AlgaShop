import React from "react";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import { Container, Wrapper } from "./App.styles";

function App() {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <div style={{ backgroundColor: "red" }}>productos disponibles</div>
          }
          middle={
            <div style={{ backgroundColor: "green" }}>su lista de compras</div>
          }
          right={<div style={{ backgroundColor: "blue" }}>estatisticas</div>}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
