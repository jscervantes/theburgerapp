// Models for the Burger Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Uh-oh. Could not connect to burger database.' });
    } else  {
        console.log('Success: Aye lesgo!');
    }
});

// SCHEMA: Define the collection's schema.
const burgerSchema = mongoose.Schema({
	shop:           { type: String, required: true },
    neighborhood:   { type: String, required: true },
    patty:          { type: String, required: true },
	rating:         { type: Number, 
                      required: true,
                      default: 0,
                      min: [0, 'Empty values not allowed.'], 
                      max: [5, 'Empty values not allowed.'] },
    date:           { type: Date,   required: true}
});

// Compile the model from the schema 
// by defining the collection name "movies".
const burgers = mongoose.model('Burgers', burgerSchema);


// CREATE model *****************************************
const createBurger = async (shop, neighborhood, patty, rating, date) => {
    const burger = new burgers({ 
        shop: shop, 
        neighborhood: neighborhood,
        patty: patty,
        rating: rating, 
        date: date
    });
    return burger.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveBurgers = async () => {
    const query = burgers.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveBurgerByID = async (_id) => {
    const query = burgers.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteBurgerById = async (_id) => {
    const result = await burgers.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateBurger = async (_id, shop, neighborhood, patty, rating, date) => {
    const result = await burgers.replaceOne({_id: _id }, {
        shop: shop,
        neighborhood: neighborhood,
        patty: patty,
        rating: rating,
        date: date
    });
    return { 
        _id: _id, 
        shop: shop,
        neighborhood: neighborhood,
        patty: patty,
        rating: rating,
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createBurger, retrieveBurgers, retrieveBurgerByID, updateBurger, deleteBurgerById }