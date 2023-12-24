// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import BurgersPage from './pages/BurgersPage';

// For Create and Edit, use the form OR table design; not both.

// If your schema requires SHORT data input, then use the TABLE design.
import EditBurgerPageTable from './pages/EditBurgerPageTable';
import AddBurgerPageTable from './pages/AddBurgerPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [burger, setBurgerToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1 class="title">Jose Cervantes <img src="/android-chrome-192x192.png" className="App-logo" alt="burger"/> </h1>
            
            <p>The NYC Burger App</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}                    
                    <Route path="/" element={<HomePage />} />
                    <Route path="/burgers" element={<BurgersPage setBurger={setBurgerToEdit}/>} />
                    <Route path="/topics" element={<TopicsPage />} />
                 
                    {/* Use these if your schema requires SHORT data input: */}
                    <Route path="/create" element={<AddBurgerPageTable />} /> 
                    <Route path="/update" element={<EditBurgerPageTable burgerToEdit={burger} />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Jose Cervantes</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;