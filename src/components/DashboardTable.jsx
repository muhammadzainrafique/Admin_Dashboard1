import React from 'react';
import TableHOC from './TableHOC';

function DashboardTable({ data }) {
  const columns = [
    {
      Header: 'Id',
      accessor: 'id',
    },
    {
      Header: 'Quantity',
      accessor: 'quantity',
    },
    {
      Header: 'Discount',
      accessor: 'discount',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];

  return (
    <TableHOC
      heading="Top Transactions"
      containerClassName="transaction-box" // Corrected typo in class name
      columns={columns} // Corrected variable name from "cloumns" to "columns"
      data={data}
    />
  );
}

export default DashboardTable;
