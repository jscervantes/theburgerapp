import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.
import { IoTrash, IoPencil } from "react-icons/io5";


function Burger({ burger, onEdit, onDelete }) {
    return (
        <tr>
            <td>{burger.shop}</td>
            <td>{burger.neighborhood}</td>
            <td>{burger.patty}</td>
            <td>{burger.rating}</td>
            <td>{burger.date.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><IoTrash onClick={() => onDelete(burger._id)} /></td>
            <td><IoPencil onClick={() => onEdit(burger)} /></td>
        </tr>
    );
}

export default Burger;