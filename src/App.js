import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';

class App extends Component {
  
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <div className="container">
                <Route exact path="/about" component={About} />
              </div>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
