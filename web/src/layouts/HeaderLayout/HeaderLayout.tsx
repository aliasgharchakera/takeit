import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import './HeaderLayout.css'

type HeaderLayoutProps = {
  children?: React.ReactNode
}

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <div className="header-color">
        <nav className="header-container">
          <ul>
            <li className="header-links">
              <Link to={routes.about()}>About</Link>
            </li>
            <li className="header-links">
              <Link to={routes.post()}>Create a Post</Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <div className="logout-flex">
              <p>Logged in as {currentUser.id}</p>
              <button type="button" onClick={logOut} className="header-links">
                Log Out
              </button>
            </div>
          ) : (
            <Link to={routes.login()} className="header-links">
              Login
            </Link>
          )}
        </nav>
      </div>
      {children}
    </>
  )
}

export default HeaderLayout
