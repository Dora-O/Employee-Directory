import React from "react"

function Header() {
  return (
  <header className="bg-dark text-white p-3 text-center">
    <h1 className="p-2 m-2">Employee Directory</h1>
    <p>Click on "Phone Number" to sort numerically or "Email" to sort alphabetically.</p>
  </header>
  )
}

export default Header;