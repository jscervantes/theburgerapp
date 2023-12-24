import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddBurgerPageTable = () => {

    const [shop, setShop]       = useState('');
    const [neighborhood, setNeighborhood]         = useState('');
    const [patty, setPatty] = useState('');
    const [rating, setRating] = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addBurger = async () => {
        const newBurger = { shop, neighborhood, patty, rating, date };
        const response = await fetch('/burgers', {
            method: 'post',
            body: JSON.stringify(newBurger),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Burger Added!`);
        } else {
            alert(`Seems like you gave an invalid rating! Response ${response.status}`);
        }
        redirect("/burgers");
    };


    return (
        <>
        <article>
            <h2>Add a burger</h2>
            <p>Specify the restaurant you tried the burger at, the neighborhood it's in, the patty style, overall rating, and the date you tried it.</p>
            
            <table id="burgers">
                <caption>Which burger are you adding?</caption>
                <tbody>
                <tr>
                <td><label for="shop">Shop</label>
                        <input
                            required
                            type="text"
                            placeholder="Whose burger?"
                            value={shop}
                            onChange={e => setShop(e.target.value)} 
                            id="shop" />
                    
                    <label for="neighborhood">Neighborhood</label>
                        <input
                            required
                            type="text"
                            value={neighborhood}
                            placeholder="In what neighborhood?"
                            onChange={e => setNeighborhood(e.target.value)} 
                            id="neighborhood" />
                    
                    <label for="patty">Patty</label>
                        <input
                            required
                            type="text"
                            placeholder="Single, double, smash..."
                            value={patty}
                            onChange={e => setPatty(e.target.value)} 
                            id="patty" />
                    
                    <label for="rating">Rating 1-5</label>
                        <input
                            required
                            type="number"
                            max="5"
                            min="1"
                            value={rating}
                            onChange={e => setRating(e.target.value)} 
                            id="rating" />
                    
                    <label for="date">Date</label>
                        <input
                            required
                            name="date"
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            pattern="\d{2}-\d{2}-\d{2}"
                            id="date" />
                    
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addBurger}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddBurgerPageTable;