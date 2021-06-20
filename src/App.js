import { GlobalStyle } from "./global/globalTheme";
import Wrapper from "./layout/Wrapper";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <h1>Hello</h1>
      </Wrapper>
    </>
  );
}

export default App;
