import React from 'react';
import { Link } from 'react-router-dom';

const NavbarSecondary = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/interviews'>Interviews</Link>
        </li>
        <li>
          <Link to='/report'>Report</Link>
        </li>
        <li>
          <Link to='/designerdatabase'>DesignerDatabase</Link>
        </li>
        <li>
          <Link to='/quotes'>Quotes</Link>
        </li>
        <li>
          <Link to='/resources'>Resources</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSecondary;