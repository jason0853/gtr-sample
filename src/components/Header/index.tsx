import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Header() {
  return (
    <header className="header">
      <h1><Link to="/">GTR</Link></h1>
    </header>
  );
}

export default Header;