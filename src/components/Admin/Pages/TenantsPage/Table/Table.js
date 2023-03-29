import {useTable} from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTenant } from '../../../../../redux/actions/tenants';

const Table = ({columns, onEdit}) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.tenants.tenants);

    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
      } = useTable({
        columns,
        data
    });
      
    const removeTenant = (id) => {
        dispatch(deleteTenant(id));
    }

    return(
        <table {...getTableProps()} className="col-12" style={{border: '2px solid black'}}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}  style={{borderRight: '2px solid black'}}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} style={{border: '1px solid black'}}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} >
                                            {cell.render("Cell")} 
                                        </td>;
                            })}

                            <td>
                                <FontAwesomeIcon icon={faPenToSquare} className="mx-2" style={{cursor: "pointer"}}  onClick={() => onEdit(row.original._id) } />
                            </td>

                            <td>
                                <FontAwesomeIcon icon={faTrash} className="mx-2" style={{cursor: "pointer"}} onClick={() => removeTenant(row.original._id)} />
                            </td>

                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default Table;