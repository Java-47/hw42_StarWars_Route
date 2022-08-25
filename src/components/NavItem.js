import React from 'react'

const NavItem = ({ itemTitle}) => {
  return (
    <li
      onClick={() => window.location.hash = `#/${itemTitle.route}`}
      className="nav-item btn btn-danger mx-1">
      {itemTitle.title}  
    </li>
  )
}

export default NavItem