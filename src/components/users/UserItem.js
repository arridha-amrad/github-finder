import React from 'react'

const UserItem = ({ user: {login, avatar_url, html_url}}) => {
  // const {login, avatar_url, html_url} = this.props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url}
           className="round-img"
           style={{width: '60px'}} 
           alt="avatar"
      />
      <h3>{login}</h3>
      <div>
        <button className="btn btn-dark btn-sm my-1">More</button>
      </div>
    </div>
  )
}

export default UserItem
