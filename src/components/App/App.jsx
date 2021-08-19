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
          left={<div>productos disponibles</div>}
          middle={<div>su lista de compras</div>}
          right={<div>estatisticas</div>}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
