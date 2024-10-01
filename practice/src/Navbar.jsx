import React from 'react'
import"./App.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
            <Link to="/Home">Home</Link>
        </li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/Services" > services</Link></li>
        <li><Link to="/About">about</Link></li>
       <li> <Link to="/Contact">contact</Link></li>
      </ul>

      
    </div>

    
  )
}
