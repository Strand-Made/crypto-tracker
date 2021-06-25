import styled from "styled-components";
import { useState } from "react";
import { HiOutlineSearch, HiX } from "react-icons/hi";

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

  .search-input {
    outline: none;
    font-size: 1rem;
    width: 100%;
    background: none;
    border: none;
    padding: 10px;
  }
`;

const SearchList = styled.ul`
  position: absolute;
  padding: 1rem;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  bottom: -40px;
  width: 100%;
  margin-top: 5px;
`;

const Search = () => {
  const [list, setList] = useState(false);
  const { coinSearch, setCoinSearch } = useState("");
  function clearInput() {
    setList("");
  }

  function handleChange(e) {
    e.preventDefault();
    if (e.target.value.length >= 1) {
      setList(true);
    } else {
      setList(false);
    }
  }

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
        onChange={handleChange}
        placeholder="Search all coins"
      ></input>
      {list ? (
        <>
          <HiX onClick={clearInput} /> <SearchList />
        </>
      ) : null}
    </SearchWrapper>
  );
};

export default Search;
