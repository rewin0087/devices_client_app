import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav'>
            <li>
              <IndexLink to='/'>Devices</IndexLink>
            </li>
            <li>
              <Link to='/devices/new'>New Device</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;