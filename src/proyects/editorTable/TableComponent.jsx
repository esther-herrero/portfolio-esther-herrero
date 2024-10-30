import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import data from './data.json';
import { v4 as uuidv4 } from 'uuid';

const TablaProyecto = () => {
    const [tableData, setTableData] = useState(data);
    const [newEntry, setNewEntry] = useState({ name: '', age: '', country: '' });
    const [filter, setFilter] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState({ id: '', name: '', age: '', country: '' });

    const columns = useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Nombre', accessor: 'name' },
            { Header: 'Edad', accessor: 'age' },
            { Header: 'Ciudad', accessor: 'country' },
            {
                Header: 'Acciones',
                Cell: ({ row }) => (
                    <div className="editorButtons">
                        <button onClick={() => openEditModal(row.original)}>Editar</button>
                        <button onClick={() => duplicateRow(row.original)}>Duplicar</button>
                        <button onClick={() => deleteRow(row.original.id)}>Borrar</button>
                    </div>
                ),
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: tableData.filter((item) =>
            Object.values(item).some((val) =>
                val.toString().toLowerCase().includes(filter.toLowerCase())
            )
        ),
    });

    const addNewRow = () => {
        const newData = { ...newEntry, id: uuidv4() };
        setTableData((prevData) => [...prevData, newData]);
        setNewEntry({ name: '', age: '', country: '' });
    };

    const openEditModal = (row) => {
        setEditData(row);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({ ...prev, [name]: value }));
    };

    const saveEdit = () => {
        setTableData((prevData) =>
            prevData.map((item) => (item.id === editData.id ? editData : item))
        );
        closeModal();
    };

    const duplicateRow = (row) => {
        const duplicatedRow = { ...row, id: uuidv4() };
        setTableData((prevData) => [...prevData, duplicatedRow]);
    };

    const deleteRow = (id) => {
        setTableData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="tableFormEditor">
            <input
                type="text"
                placeholder="Buscador"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />

            <table {...getTableProps()} style={{ width: '43rem', border: '1px solid black', marginTop: '10px' }}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th key={column.id} {...column.getHeaderProps()} style={{ border: '1px solid black', padding: '8px' }}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr key={row.original.id} {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td key={cell.column.id} {...cell.getCellProps()} style={{ border: '1px solid black', padding: '8px' }}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <div className="newEntry">
                <h5>Agregar nueva entrada</h5>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={newEntry.name}
                    onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Edad"
                    value={newEntry.age}
                    onChange={(e) => setNewEntry({ ...newEntry, age: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Ciudad"
                    value={newEntry.country}
                    onChange={(e) => setNewEntry({ ...newEntry, country: e.target.value })}
                />
                <button onClick={addNewRow}>Add</button>
            </div>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Editar entrada</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={editData.name}
                            onChange={handleEditChange}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={editData.age}
                            onChange={handleEditChange}
                        />
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={editData.country}
                            onChange={handleEditChange}
                        />
                        <div>
                            <button onClick={saveEdit}>Guardar</button>
                            <button onClick={closeModal}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TablaProyecto;
