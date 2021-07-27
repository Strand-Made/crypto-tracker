import styled from "styled-components";

const CryptoCard = styled.article`
  background: white;
  padding: 2rem 1rem;
  border-radius: 2px;
  width: 24%;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardBody = styled.div`
  .trending__title {
    font-weight: 400;
    font-size: 1rem;
  }

  .trending__symbol {
    color: var(--text-color-2);
  }

  .trending__price {
    font-weight: 500;
  }
`;

const Card = ({ title, symbol, price, image }) => {
  return (
    <CryptoCard>
      <CardHeader>
        <img className="trending__image" width="30" src={image} alt={title} />
      </CardHeader>
      <CardBody>
        <h3 className="trending__title">
          {title} <span className="trending__symbol">{symbol}</span>
        </h3>

        <p className="trending__price">${price}</p>
      </CardBody>
    </CryptoCard>
  );
};

export default Card;
