import { useMemo } from "react";
import { useQuery } from "react-query";
import { GlobalStyle } from "./global/globalTheme";
import * as api from "./cryptoApi";
import Wrapper from "./layout/Wrapper";
import Navbar from "./components/navbar/Navbar";
import Container from "./layout/Container";
import PricePage from "./pages/PricePage";
import Table from "./components/table/Table";

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
          },
          {
            Header: "7D Chart",
            accessor: "cryptos.chart",
          },
          {
            Header: "Trade",
            accessor: "trade",
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
          <PricePage />
          <Table columns={columns} data={cryptos} />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
