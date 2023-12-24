import React from 'react';
import Burger from './Burger';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function BurgerList({ burgers, onDelete, onEdit }) {
    return (
        <table id="burgers">
            <caption>Add and Edit burgers</caption>
            <thead>
                <tr>
                    <th>Shop</th>
                    <th>Neighborhood</th>
                    <th>Patty</th>
                    <th>Rating</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {burgers.map((burger, i) => 
                    <Burger 
                        burger={burger} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default BurgerList;
