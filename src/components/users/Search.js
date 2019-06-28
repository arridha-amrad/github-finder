import React, {Component} from 'react'

class Search extends Component{
  state = {
    text: ''
  }
  onChange = e => {
    this.setState({ text: e.target.value});
    // console.log(this.state.text);
  }
  onSubmit = e => {
    e.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert('Please enter something', 'light')
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' })
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" value={this.state.text} onChange={this.onChange} placeholder="Search user..." />
          <input type="submit" className="btn btn-primary btn-block" value="Search"/>
        </form>
        {this.props.showClear && (
        <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>
        )}
      </div>
    )
  }
}

export default Search
