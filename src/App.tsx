import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navbar">
          <li><Link to='/'>Home </Link></li>
          <li><Link to='/signin'>Signin</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>

        </ul>
        <h3>Welcome</h3>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
