import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import Axios from 'axios';

const App = () => {
const [ loading, setLoading ] = useState(false);
const [users, setUsers] = useState([]);
const [user, setUser] = useState({});
const [alert, setAlert] = useState(null);
const [repos, setRepos] = useState([]);

  // async componentDidMount() {
  //   this.setState({loading: true});
  //   const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading:false});
  // }

  const searchUser = async text => {
    setLoading(true);
    const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }

  const getUser = async (username) => {
    setLoading(true);
    const res = await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  }

  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    setLoading(false);
    setRepos(res.data);
  }

  const showAlert = (msg, type) => {
    setAlert({msg, type});
    // this.setState({ alert: {msg, type}});
    setTimeout(() => setAlert(null), 3000);
  }

  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };

    return (
      <Router>
        <div className="App">
          <Navbar />
              <div className="container">
              <Alert alert={alert}/>
            <Switch>
              <Route exact path='/' render = {props => (
                <Fragment>
                  <Search searchUser={searchUser} setAlert={showAlert} clearUser={clearUser} showClear={users.length > 0 ? true : false} />
                  <Users users={users} loading={loading}/>
                </Fragment>
              )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} 
                      getUser = {getUser}
                      getUserRepos = {getUserRepos}
                      repos = {repos}
                      user={user}
                      loading={loading}
                />
                )}/>
                </Switch>
              </div>
        </div>
      </Router>
    );
}

export default App;
