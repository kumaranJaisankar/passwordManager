import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    isChecked: false,
    passList: [],
    website: '',
    username: '',
    password: '',
    searchUser: '',
  }

  addToListBtn = event => {
    event.preventDefault()
    const {website, password, username} = this.state
    const newPassList = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prev => ({
      passList: [...prev.passList, newPassList],
      website: '',
      username: '',
      password: '',
    }))
  }

  checkedOrNot = event => {
    this.setState({isChecked: event.target.checked})
  }

  onUserWebsiteInput = event => {
    this.setState({website: event.target.value})
  }

  onUserNameInput = event => {
    this.setState({username: event.target.value})
  }

  onUserPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  searchUserList = event => {
    this.setState({searchUser: event.target.value})
  }

  whenNoPassword = () => (
    <div className="no-password">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-pass-size"
      />
      <p className="your-pass">No passwords</p>
    </div>
  )

  deletePassord = id => {
    const {passList} = this.state
    const deleteList = passList.filter(each => each.id !== id)
    this.setState({passList: deleteList})
  }

  addingPassToList = filterPassList => {
    const {isChecked} = this.state

    return (
      <ul>
        {filterPassList.map(each => (
          <PasswordItem
            key={each.id}
            passDeatils={each}
            isChecked={isChecked}
            deletePassord={this.deletePassord}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {passList, website, username, password, searchUser} = this.state
    const filterPassList = passList.filter(each =>
      each.username.toLowerCase().includes(searchUser.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="inside-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-size"
          />
          <div className="card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="img-size"
            />
            <form className="form" onSubmit={this.addToListBtn}>
              <h1 className="heading">Add New Password</h1>
              <div className="each-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="logo"
                />
                <input
                  value={website}
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onUserWebsiteInput}
                />
              </div>
              <div className="each-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="logo"
                />
                <input
                  value={username}
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onUserNameInput}
                />
              </div>
              <div className="each-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="logo"
                />
                <input
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onUserPasswordInput}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="card-container">
          <div className="top-bar">
            <h1 className="your-pass">Your Passwords</h1>
            <p className="span">{filterPassList.length}</p>
            <div className="each-input width">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="logo"
              />
              <input
                className="input"
                type="search"
                placeholder="Search"
                onChange={this.searchUserList}
              />
            </div>
          </div>
          <hr />
          <div className="check-box-item">
            <input
              id="checkBox"
              type="checkbox"
              className="check"
              onChange={this.checkedOrNot}
            />
            <label htmlFor="checkBox">Show Passwords</label>
          </div>
          {filterPassList.length > 0
            ? this.addingPassToList(filterPassList)
            : this.whenNoPassword()}
        </div>
      </div>
    )
  }
}
export default PasswordManager
