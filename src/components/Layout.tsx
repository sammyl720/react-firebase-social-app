import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
const Layout:React.FC = (props) => {
  const [user, setUser ] = useState<firebase.User | null >(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(authState => {
      if(authState) {
        console.log('user is signed in')
        setUser(authState)
      } else {
        console.log('user is logged out')
        setUser(user)
      }
    })
  }, [])
  return (
    <div className='layout'>
      <nav className="navbar">
        <ul>
          <li><Link to='/'>Home</Link></li>
          { user ? (
            <li><Link to='/account'>Account</Link></li>
          ) : (
            <>
              <li><Link to='/signin'>Sign In</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </>
          ) }
        </ul>
      </nav>
      { props.children }
    </div>
  )
}

export default Layout
