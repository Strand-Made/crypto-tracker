import { useMemo } from "react";
import { useQuery } from "react-query";
import { GlobalStyle } from "./global/globalTheme";
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import * as api from "./cryptoApi";
import Wrapper from "./layout/Wrapper";
import Navbar from "./components/navbar/Navbar";
import Container from "./layout/Container";
import PricePage from "./pages/PricePage";
import Button from "./components/buttons/Button";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Crypto Table",
        columns: [
          {
            Header: "#",
            accessor: "market_cap_rank",
          },

          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "",
            accessor: "image",
            Cell: ({ cell: { value } }) => {
              return <img width={25} src={value} alt="crypto" />;
            },
          },
          {
            Header: "",
            accessor: "symbol",
            Cell: ({ cell: { value } }) => {
              return <span className="table__symbol"> {value} </span>;
            },
          },
          {
            Header: "Price",
            accessor: "current_price",
            Cell: ({ cell: { value } }) => {
              const roundedValue = parseFloat(value.toFixed(2));
              const fixedValue = roundedValue.toLocaleString();
              return <p> ${fixedValue} </p>;
            },
          },
          {
            Header: "24h Change",
            accessor: "price_change_percentage_24h",
            Cell: ({ cell: { value } }) => {
              const roundedValue = parseFloat(value.toFixed(2));
              const checkIfNegative = Math.sign(roundedValue);
              return (
                <span
                  className={checkIfNegative === -1 ? "decrease" : "increase"}
                >
                  {checkIfNegative === -1 ? <TiArrowDown /> : <TiArrowUp />}
                  {roundedValue}%
                </span>
              );
            },
          },
          {
            Header: "24h Volume",
            accessor: "volume",
          },
          {
            Header: "Market Cap",
            accessor: "market_cap",
            Cell: ({ cell: { value } }) => {
              const numberSeparator = value.toLocaleString();
              return <p>${numberSeparator}</p>;
            },
          },
          {
            Header: "7D Chart",
            accessor: "cryptos.chart",
          },
          {
            Header: "Trade",
            accessor: "trade",
            Cell: ({ cell: { value } }) => {
              return <Button>Trade</Button>;
            },
          },
        ],
      },
    ],
    []
  );

  const { data: cryptos, status } = useQuery("cryptos", api.getAllCoins);

  if (status === "loading") return <p>Loading....</p>;
  if (status === "error") return <p>Error</p>;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Navbar />
          <PricePage columns={columns} coins={cryptos} />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
