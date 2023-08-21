import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

import './HomePage.css'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <header>
        <div className="heading-flex">
          <h1>Redwood Blog</h1>
          {isAuthenticated ? (
            <div className="logout-flex">
              <p>Logged in as {currentUser.id}</p>
              <button type="button" onClick={logOut}>
                Log Out
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.post()}>Create a Post</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>Home</main>
    </>
  )
}

export default HomePage
