import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import Axios from 'axios';

class App extends Component {
  state = {
    loading: false,
    users: [],
    user: {},
    alert: null,
    repos: []
  }
  // async componentDidMount() {
  //   this.setState({loading: true});
  //   const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading:false});
  // }

  searchUser = async text => {
    this.setState({loading: true});
    const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading:false});
  }

  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    this.setState({ user: res.data, loading:true})
  }

  getUserRepos = async (username) => {
    this.setState({loading: true});
    const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    this.setState({repos: res.data, loading:false});
  }

  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type}});
    setTimeout(() => this.setState({alert: null}), 3000);
  }

  clearUser = () => this.setState({ users: [], loading: false});

  render(){
    const {users, loading, user, repos} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
              <div className="container">
              <Alert alert={this.state.alert}/>
            <Switch>
              <Route exact path='/' render = {props => (
                <Fragment>
                  <Search searchUser={this.searchUser} setAlert={this.setAlert} clearUser={this.clearUser} showClear={this.state.users.length > 0 ? true : false} />
                  <Users users={users} loading={loading}/>
                </Fragment>
              )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} 
                      getUser = {this.getUser}
                      getUserRepos = {this.getUserRepos}
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
}

export default App;
