import { NavMenu } from './NavMenu'
import { UserArea } from './UserArea'
import './styles/HeaderStyles.css'

export const Header = () => {
  return (
    <header className="nav-box-background">
      <nav className="navbar navbar-expand-lg">
        <UserArea />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavMenu />
      </nav>
    </header>
  )
}