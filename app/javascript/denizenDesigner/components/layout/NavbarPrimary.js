import React from 'react';
import { Link } from 'react-router-dom';

const NavbarPrimary = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>HISTORY OF PARTICIPATORY DESIGN</Link>
        </li>
        <li>
          <Link to='/'>DENIZEN DESIGNER</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarPrimary;