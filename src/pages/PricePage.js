import { useQuery } from "react-query";
import * as api from "../cryptoApi";
import styled from "styled-components";
import Search from "../components/search/Search";
import Table from "../components/table/Table";
import Card from "../components/card/Card";

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

const PricePage = ({ columns, coins }) => {
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
      <Table columns={columns} data={coins} />
    </Main>
  );
};

export default PricePage;
