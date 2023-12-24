import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BurgerList from '../components/BurgerList';
import { Link } from 'react-router-dom';

import { FaHamburger } from "react-icons/fa";

function BurgersPage({ setBurger }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [burgers, setBurgers] = useState([]);

    // RETRIEVE the entire list of burgers
    const loadBurgers = async () => {
        const response = await fetch('/burgers');
        const burgers = await response.json();
        setBurgers(burgers);
    } 
    

    // UPDATE a single burger
    const onEditBurger = async burger => {
        setBurger(burger);
        redirect("/update");
    }


    // DELETE a single burger  
    const onDeleteBurger = async _id => {
        const response = await fetch(`/burgers/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/burgers');
            const burgers = await getResponse.json();
            setBurgers(burgers);
        } else {
            console.error(`burger = ${_id} not deleted, status code = ${response.status}`)
        }
    }

    // LOAD all the burgers
    useEffect(() => {
        loadBurgers();
    }, []);

    // DISPLAY the burgers
    return (
        <>
            <h2>Burgers tried in New York City.</h2>
            <p>They're rated!</p>
            <Link class="addburger" to="/create">Add Burger <FaHamburger/></Link>
            <BurgerList 
                burgers={burgers} 
                onEdit={onEditBurger} 
                onDelete={onDeleteBurger} 
            />
        </>
    );
}

export default BurgersPage;