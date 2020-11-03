import React, {useState} from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import firebase from '../firebase/app'
const auth = firebase.auth()
const SignUp:React.FC<RouteComponentProps> = (props) => {
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
      auth.createUserWithEmailAndPassword(fields.email, fields.password).then((creds) => {
        console.log(`${creds.user?.email} just signed up in\redirect now`)
        props.history.push('/account')
      }).catch(err => console.log(err))
    }

  } 
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h3 className="title">Sign Up</h3>
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
        <div className="cta-group">
          <input type="submit" value="Sign Up" className="btn btn-primary"/>
          <span className="info">Already have An Account? <Link to='/signin'>Login</Link></span>
        </div>
      </form>

    </div>
  )
}

export default SignUp
