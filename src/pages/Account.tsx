import React, { useEffect } from 'react'
import firebase from 'firebase'
import { RouteComponentProps } from 'react-router-dom'

const auth = firebase.auth()
const Account:React.FC<RouteComponentProps> = (props) => {
  useEffect(() => {
    if(!auth.currentUser) {
      props.history.push('/signin')
    }
  }, [auth.currentUser])
  return (
    <div className='container'>
      <div className="user-info">
       <h4 className="greet">Hello { auth.currentUser?.displayName || auth.currentUser?.email}</h4>
      <p>You are now logged in</p>
      </div>
    </div>
  )
}

export default Account
