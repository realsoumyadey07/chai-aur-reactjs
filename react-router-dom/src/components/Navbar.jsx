import React from 'react'

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
        <a href="#">Logo</a>
        <ul style={{display: "flex", gap: "20px"}}>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar