import React, {useState} from 'react'
import firebase from '../firebase/app'
const auth = firebase.auth()
const SignIn = () => {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(fields.email === '' || fields.password === ''){
      alert("Please fill out both fields")
      return
    } else {

    }

    auth.signInWithEmailAndPassword(fields.email, fields.password).then((creds) => {
      console.log(`${creds.user?.email} just logged in\redirect now`)
    }).catch(err => console.log(err))
  } 
  return (
    <div className='container'>
      <h3 className="title">Sign In</h3>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-Mail</label>
          <input 
            type="email"
            name="email"
            id="email"
            placeholder='E-mail'
            value={fields.email}
            required
            onChange={e => { setFields(() => {
              return { ...fields, [e.target.name]: e.target.value }
            })}}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            value={fields.password}
            required
            onChange={e => { setFields(() => {
              return { ...fields, [e.target.name]: e.target.value }
            })}}
          />
        </div>
        <input type="submit" value="Sign In" className="btn btn-primary"/>
      </form>
    </div>
  )
}

export default SignIn
