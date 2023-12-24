import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditBurgerPageTable = ({ burgerToEdit }) => {
 
    const [shop, setShop]       = useState(burgerToEdit.shop);
    const [neighborhood, setNeighborhood]         = useState(burgerToEdit.neighborhood);
    const [patty, setPatty] = useState(burgerToEdit.patty);
    const [rating, setRating] = useState(burgerToEdit.rating);
    const [date, setDate] = useState(burgerToEdit.date);
    
    const redirect = useNavigate();

    const editBurger = async () => {
        const response = await fetch(`/burgers/${burgerToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                shop: shop, 
                neighborhood: neighborhood, 
                patty: patty,
                rating: rating,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`burger edited`);
        } else {
            const errMessage = await response.json();
            alert(`Seems like you gave an invalid rating! Response = ${response.status}. ${errMessage.Error}`);
        }
        redirect("/burgers");
    }

    return (
        <>
        <article>
            <h2>Edit a burger</h2>
            <p>Feel free to change the rating of any burger.</p>
            <table id="burgers">
                <caption>Which burger are you changing?</caption>
                <tbody>
                    <tr>
                    <td><label for="shop">Restaurant</label>
                            <input
                                type="text"
                                placeholder="Shop"
                                value={shop}
                                onChange={e => setShop(e.target.value)} 
                                id="shop" />

                        <label for="neighborhood">Neighborhood</label>
                            <input
                                type="text"
                                value={neighborhood}
                                placeholder="Neighborhood"
                                onChange={e => setNeighborhood(e.target.value)} 
                                id="neighborhood" />
                        
                        <label for="patty">Patty</label>
                            <input
                                type="text"
                                placeholder="Patty style..."
                                value={patty}
                                onChange={e => setPatty(e.target.value)} 
                                id="patty" />
                        
                        <label for="rating">Rating 1-5</label>
                            <input
                                type="number"
                                max="5"
                                min="1"
                                placeholder="Overall rating"
                                value={rating}
                                onChange={e => setRating(e.target.value)} 
                                id="rating" />
                        
                        <label for="date">Date</label>
                            <input
                                type="date"
                                placeholder="date"
                                value={date}
                                onChange={e => setDate(e.target.value)} 
                                id="date" />
                        
                        <label for="submit">Commit</label>
                            <button
                                type="submit"
                                onClick={editBurger}
                                id="submit"
                            >Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditBurgerPageTable;