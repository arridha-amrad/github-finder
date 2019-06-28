import React, {Fragment, Component} from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    const {name, company, avatar_url, location, bio, blog, followers, following, public_repos, public_gists, hireable} = this.props.user;
    const {loading,repos} = this.props;
    if(loading) return <Spinner/>;
    return(
      <Fragment>
        <Link to='/' className="btn btn-light">Back to Search</Link>
        Hireable {''}
        {hireable ?  (<i className="fas fa-check text-success"/>) : (<i className="fas fa-times-circle text-danger"/>)}
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '150px' }}/>
            <h1>{name}</h1>
            <p>location : {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href="html_url" className="btn btn-primary my-1">Visit Github profile</a>
            <ul>
              <li>
                {name && (
                  <Fragment>
                    <p>Name : {name}</p>
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <p>Company: {company}</p>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <p>Blog : {blog}</p>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Follower: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gist: {public_gists}</div>
        </div>
        <Repos repos={repos}/>
      </Fragment>
    )
  }
}

export default User
