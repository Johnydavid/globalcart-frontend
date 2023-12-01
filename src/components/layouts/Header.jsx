import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <div>

<nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
            
          <img width="75px" src="/images/logo.png" alt="GlobalCart" />
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search/>
        
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <button className="btn" id="login_btn">Login</button>

        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">2</span>
      </div>
    </nav>
    </div>
  )
}

export default Header