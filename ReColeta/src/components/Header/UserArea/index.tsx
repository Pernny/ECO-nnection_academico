import ProfileImage from '../../../assets/img/perfil.png'

export const UserArea = () => {
  return (
    <a className="navbar-brand" href="/">
      <div className="username-container">
        <img src={ProfileImage} width="30" height="30" className="d-inline-block align-top" alt="" />
        <span>John Doe</span>
      </div>
    </a>
  )
}