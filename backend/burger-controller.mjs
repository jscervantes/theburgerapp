// Controllers for the Movie Collection

import 'dotenv/config';
import express from 'express';
import * as burgers from './burger-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/burgers', (req,res) => { 
    burgers.createBurger(
        req.body.shop,
        req.body.neighborhood,
        req.body.patty, 
        req.body.rating,
        req.body.date
        )
        .then(burger => {
            console.log(`"${burger.shop}" was added to the collection.`);
            res.status(201).json(burger);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Uh-oh. Bad request from client. Burger was not able to be created.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/burgers', (req, res) => {
    burgers.retrieveBurgers()
        .then(burgers => { 
            if (burgers !== null) {
                console.log(`All burgers were retrieved from the collection.`);
                res.json(burgers);
            } else {
                res.status(404).json({ Error: 'Uh-oh. Resource not found. Burger could not be retrieved.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Uh-oh. Bad request from client. Burger could not be retrieved.' });
        });
});


// RETRIEVE by ID controller
app.get('/burgers/:_id', (req, res) => {
    burgers.retrieveBurgerByID(req.params._id)
    .then(burger => { 
        if (burger !== null) {
            console.log(`"${burger.shop}" was retrieved, based on its ID.`);
            res.json(burger);
        } else {
            res.status(404).json({ Error: 'Oh no. Could not find this burger.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Uh-oh. Bad request from client. Burger not retrieved.' });
    });

});


// UPDATE controller ************************************
app.put('/burgers/:_id', (req, res) => {
    burgers.updateBurger(
        req.params._id, 
        req.body.shop, 
        req.body.neighborhood,
        req.body.patty,
        req.body.rating,
        req.body.date 
    )
    .then(burger => {
        console.log(`"${burger.shop}" was updated.`);
        res.json(burger);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Uh-oh. Bad request from client. Burger not updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/burgers/:_id', (req, res) => {
    burgers.deleteBurgerById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} burger was deleted.`);
                res.status(200).send({ Success: 'Burger successfully deleted! Now that is a smashed-burger!' });
            } else {
                res.status(404).json({ Error: 'Oh no. Burger not found. Burger not deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Bad request.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});