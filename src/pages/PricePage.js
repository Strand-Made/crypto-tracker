import { useQuery } from "react-query";
import * as api from "../cryptoApi";
import styled from "styled-components";
import Search from "../components/search/Search";
import Card from "../components/card/Card";

const Main = styled.main`
  margin: 1.5rem 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  const { data: trending, status } = useQuery("trending", api.getTrending);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error getting price</p>;

  return (
    <Main>
      <ModuleHeader>
        <h1>Top Movers</h1>
        <div>
          <Search />
        </div>
      </ModuleHeader>
      <CardContainer>
        {trending.coins.map((coin) => {
          return (
            <Card
              key={coin.item.id}
              title={coin.item.name}
              symbol={coin.item.symbol}
              price={coin.item.price_btc}
              image={coin.item.small}
            />
          );
        })}
      </CardContainer>
    </Main>
  );
};

export default PricePage;
