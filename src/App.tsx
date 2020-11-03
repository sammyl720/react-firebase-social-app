import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Layout from './components/Layout';
import Account from './pages/Account';
function App() {
  return (
    <Router>
      <div className="App">
          <Layout>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/account' component={Account} />
            </Switch>
          </Layout>
      </div>
    </Router>
  );
}

export default App;
