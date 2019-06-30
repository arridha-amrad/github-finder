import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
    // console.log(this.state.text);
  }
  const onSubmit = e => {
    e.preventDefault();
    if(text === '') {
      alertContext.setAlert('Please enter something', 'light')
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  }
    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input type="text" value={text} onChange={onChange} placeholder="Search user..." />
          <input type="submit" className="btn btn-primary btn-block" value="Search"/>
        </form>
        {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
        )}
      </div>
    )
}

export default Search
