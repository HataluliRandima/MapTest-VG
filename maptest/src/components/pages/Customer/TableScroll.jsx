import React from 'react'
import fakedata from './Mockdata.json'
import { useTable } from 'react-table'
import '../../../assets/styles/Tablescroll.css'

const TableScroll = () => {


    const data = React.useMemo(() => fakedata, []);
    const columns = React.useMemo(() =>[

        {
            Header: "Index",
            accessor: "id",
          },
          {
            Header: "First Name",
            accessor: "first_name",
          },
          {
            Header: "Last Name",
            accessor: "last_name",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Gender",
            accessor: "gender",
          },
          {
            Header: "University",
            accessor: "university",
          },
          {
            Header: "efefe",
            accessor: "wqdwq",
          },

    ],[]);


    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });


  return (
    <div className="App">
    <div className="container">
      <table className='table1' {...getTableProps()}>
        <thead className='thead1 ' >
          {headerGroups.map((headerGroup) => (
            <tr className='tr1' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className='th1' {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='tbody1' {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className='tr1' {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className='td1' {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default TableScroll