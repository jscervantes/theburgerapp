import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline, IoGitBranch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home <IoHomeOutline/></Link>
        <Link to="/burgers">Burgers <GiHamburgerMenu/></Link>
        <Link to="/topics">Topics <IoGitBranch/></Link>
    </nav>
  );
}

export default Navigation;
