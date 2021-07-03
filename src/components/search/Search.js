import styled from "styled-components";
import { useState } from "react";
import { HiOutlineSearch, HiX } from "react-icons/hi";
import SearchList from "./SearchList";

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 255px;
  border: 0.5px solid var(--text-color-2);
  border-radius: 2px;

  .label {
    position: absolute;
  }

  .search-icon {
    color: var(--text-color-2);
  }

  .clear-icon {
    cursor: pointer;
  }

  .search-input {
    outline: none;
    font-size: 1rem;
    width: 100%;
    background: none;
    border: none;
    padding: 10px;
  }
`;

const Search = ({ data }) => {
  const [searchTerm, setSearchTerms] = useState("");
  const handleChange = (event) => {
    setSearchTerms(event.target.value);
  };
  const resetInput = () => {
    setSearchTerms("");
  };
  // filter data on search
  const results = !searchTerm
    ? null
    : data.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <SearchWrapper>
      <label htmlFor="coinSearch">
        <HiOutlineSearch className="search-icon" size={21} />
      </label>
      <input
        name="coinSearch"
        className="search-input"
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search all coins"
      />
      {searchTerm ? (
        <>
          <HiX className="clear-icon" onClick={resetInput} />
          <SearchList data={results} />
        </>
      ) : null}
    </SearchWrapper>
  );
};

export default Search;
