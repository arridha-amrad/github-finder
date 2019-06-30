import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  // async componentDidMount() {
  //   this.setState({loading: true});
  //   const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading:false});
  // }

  // const searchUser = async text => {
  //   setLoading(true);
  //   const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
  //   setUsers(res.data.items);
  //   setLoading(false);
  // }

  // const getUser = async (username) => {
  //   setLoading(true);
  //   const res = await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
  //   setUser(res.data);
  //   setLoading(false);
  // }

  // const getUserRepos = async (username) => {
  //   setLoading(true);
  //   const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
  //   setLoading(false);
  //   setRepos(res.data);
  // }

  // const showAlert = (msg, type) => {
  //   setAlert({msg, type});
  //   // this.setState({ alert: {msg, type}});
  //   setTimeout(() => setAlert(null), 3000);
  // }

  // const clearUser = () => {
  //   setUsers([]);
  //   setLoading(false);
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
