import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./global/globalTheme";
import Wrapper from "./layout/Wrapper";
import Navbar from "./components/navbar/Navbar";
import Container from "./layout/Container";
import PricePage from "./pages/PricePage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/prices">
                <PricePage />
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
