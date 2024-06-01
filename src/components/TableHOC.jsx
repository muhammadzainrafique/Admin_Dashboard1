import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { AiOutlineSortDescending, AiOutlineSortAscending } from 'react-icons/ai';

export default function TableHOC({ columns, data, containerClassName, heading, showPagination }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    nextPage,
    gotoPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 4 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className={containerClassName}>
      <h2 className="heading">{heading}</h2>

      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted && (
                    <span>
                      {column.isSortedDesc ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {showPagination &&  (
        <div className="next-previous-div">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Prev
          </button>
          <span>
            Page {pageIndex + 1} of {pageCount}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
