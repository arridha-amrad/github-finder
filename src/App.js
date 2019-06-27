import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Users from './components/users/Users';
import Axios from 'axios';

class App extends Component {
  state = {
    loading: false,
    users: []
  }
  async componentDidMount() {
    this.setState({loading: true});
    const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    this.setState({ users: res.data, loading:false});
  }
  render(){
    const {users, loading} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
              <div className="container">
            <Switch>
              <Route exact path='/' render = {props => (
                <Fragment>
                <Users users={users} loading={loading}/>
                </Fragment>
              )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
              </div>
        </div>
      </Router>
    );
  }
}

export default App;
