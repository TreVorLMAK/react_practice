import React from 'react'

export const Navigation = () => {
  return (
    <nav className='container'>
    <div className="logo">
        <img src="/images/logo.png" alt="logo" />
        </div>
        <ul>
            <li href="#">Home</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>

        <button>Login</button>
</nav>
  )
}

export default Navigation;