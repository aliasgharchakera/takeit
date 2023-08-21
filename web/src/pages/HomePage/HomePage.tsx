import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <header>
        <div className="heading-flex">
          <h1>Take-It</h1>
          <h2>Insane CBT Device Exchanging Platform</h2>
        </div>
      </header>
    </>
  )
}

export default HomePage
