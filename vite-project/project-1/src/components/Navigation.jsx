import React from 'react'

const Navigation = () => {
  return (
    <nav>
    <div className='logo'>
        <img className='nike-logo' src="https://static.vecteezy.com/system/resources/previews/012/560/876/original/nike-logo-on-transparent-background-free-vector.jpg" alt="nike-logo" />
    </div>

    <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
    </ul>

    <button>Login</button>
</nav>
  )
}

export default Navigation