import React from 'react'
import firebase from 'firebase'
const Home = () => {

  const auth = firebase.auth()
  return (
    <div className='container'>
      <h1>This is The Homepage</h1>
      { auth.currentUser && (
        <div className="info-box">
          <p>{auth.currentUser.email} is logged in</p>
          <button onClick={() => {
            auth.currentUser?.delete()
          }} className="btn btn-classic">
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
