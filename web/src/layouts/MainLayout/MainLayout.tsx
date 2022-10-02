import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const auth = useAuth()

  console.log(auth)

  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.comments()}>comments</Link>
            </li>
            <li>
              <Link to={routes.posts()}>posts</Link>
            </li>
            {auth.isAuthenticated ? (
              <button onClick={() => auth.logOut()}>logout</button>
            ) : (
              <li>
                <Link to={routes.login()}>login</Link>
              </li>
            )}
          </ul>

          <button className="bg-blue-600 p-10" onClick={() => auth.logOut()}>
            log out
          </button>

          <pre className="bg-red-300 p-2">{JSON.stringify(auth, null, 2)}</pre>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
