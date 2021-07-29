import { useQuery } from "react-query";
import { useMemo } from "react";
import styled from "styled-components";
import * as api from "../cryptoApi";

import Search from "../components/search/Search";
import Table from "../components/table/Table";
import Card from "../components/card/Card";
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import Button from "../components/buttons/Button";

const Main = styled.main`
  margin: 1.5rem 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ModuleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h1 {
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

const PricePage = () => {
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

  const { data: cryptos } = useQuery("cryptos", api.getAllCoins);
  const { data: trending, status } = useQuery("trending", api.getTrending);
  const { data: allCoins } = useQuery("allCoins", api.getListCoins);
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error has occured</p>;

  return (
    <Main>
      <ModuleHeader>
        <h1>Top Movers</h1>
        <div>
          <Search data={allCoins} />
        </div>
      </ModuleHeader>
      <CardContainer>
        {trending.coins.slice(0, 4).map((coin) => {
          const usdPrice = 0.028;
          const truePrice = coin.item.price_btc / usdPrice;
          function roundPrice(x) {
            return Number.parseFloat(x).toPrecision(2) * 1000;
          }

          return (
            <Card
              key={coin.item.id}
              title={coin.item.name}
              symbol={coin.item.symbol}
              price={roundPrice(truePrice)}
              image={coin.item.small}
            />
          );
        })}
      </CardContainer>
      <Table columns={columns} data={cryptos} />
    </Main>
  );
};

export default PricePage;
