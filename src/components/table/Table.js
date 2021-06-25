import styled from "styled-components";
import { useTable } from "react-table";

const CryptoTable = styled.table`
  border-spacing: 0;
  color: var(--table-text-color);
  .increase {
    color: var(--success-color);
  }
  .decrease {
    color: var(--error-color);
  }
  .table__symbol {
    text-transform: uppercase;
  }

  th {
    color: var(--text-color);
    font-size: 0.7rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: start;
  }
  th,
  td {
    padding: 0.5rem;
  }

  td {
    border-bottom: 1px solid var(--background-color);
    background: white;
  }

  tbody {
    tr {
      transition: all 0.2s ease-in-out;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
      }
    }
  }
`;

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <CryptoTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}> {column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </CryptoTable>
  );
};

export default Table;
