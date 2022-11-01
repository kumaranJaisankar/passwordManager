import './index.css'

const PasswordItem = props => {
  const {passDeatils, isChecked, deletePassord} = props
  const {id, website, username, password} = passDeatils
  const backgroundColor = ['blue', 'red', 'orange']
  const randomCol =
    backgroundColor[Math.ceil(Math.random() * backgroundColor.length - 1)]
  const image = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="str-size"
    />
  )
  const pass = <p className="para">{password}</p>

  const toDelete = () => {
    deletePassord(id)
  }

  return (
    <li>
      <div className="all-details">
        <div className={`${randomCol} initial-style`}>
          {username.slice(0, 1).toLocaleUpperCase()}
        </div>
        <div>
          <p className="para">{website}</p>
          <p className="para">{username}</p>
          {isChecked ? pass : image}
        </div>
      </div>
      <button
        testid="delete"
        type="button"
        className="delete-btn"
        onClick={toDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}
export default PasswordItem
