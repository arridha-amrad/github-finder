import React, {useState} from 'react'

const Search = ({searchUser, clearUser, showClear, setAlert}) => {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
    // console.log(this.state.text);
  }
  const onSubmit = e => {
    e.preventDefault();
    if(text === '') {
      setAlert('Please enter something', 'light')
    } else {
      searchUser(text);
      setText('');
    }
  }
    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input type="text" value={text} onChange={onChange} placeholder="Search user..." />
          <input type="submit" className="btn btn-primary btn-block" value="Search"/>
        </form>
        {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUser}>Clear</button>
        )}
      </div>
    )
}

export default Search
