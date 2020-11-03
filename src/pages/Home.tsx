import React from 'react'
import firebase from 'firebase'
import { RouteComponentProps } from 'react-router-dom'
const Home:React.FC<RouteComponentProps> = (props) => {

  const auth = firebase.auth()
  return (
    <div className='container'>
      <h1>This is The Homepage</h1>
      { auth.currentUser && (
        <div className="info-box">
          <p>{auth.currentUser.email} is logged in</p>
          <button onClick={() => {
            auth.signOut()
          }} className="btn btn-classic">
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
