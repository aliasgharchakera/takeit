import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <header>
        <div className="heading-flex">
          <h1>Redwood Blog</h1>
        </div>
      </header>
    </>
  )
}

export default HomePage
