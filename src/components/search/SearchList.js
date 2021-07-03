import styled from "styled-components";

const StyledList = styled.ul`
  position: absolute;
  z-index: 5;
  height: fit-content;
  max-height: 20rem;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  bottom: 0;
  top: 2.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  margin-top: 5px;
  list-style: none;

  a {
    color: var(--text-color-2);
    text-decoration: none;
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    &:hover {
      background: var(--background-color);
    }
    p {
      margin: 0 0.5rem;
    }
    .symbol {
      color: var(--table-text-color-2);
    }
  }
`;

const SearchList = ({ data }) => {
  return (
    <StyledList>
      {data.slice(0, 30).map((item) => (
        <a href="s">
          <li key={item.id}>
            <p>
              {item.name} <span className="symbol">({item.symbol})</span>
            </p>
          </li>
        </a>
      ))}
    </StyledList>
  );
};

export default SearchList;
