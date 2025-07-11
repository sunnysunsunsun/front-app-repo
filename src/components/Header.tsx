import { NavLink, useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: 'movies/tt3521164', label: 'Moana' },
  { to: '/todos', label: 'Todos' },
  { to: '/signin', label: 'Sign In' }
]

export default function Header() {
  const [token, setToken] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [location])

  function signOut() {
    localStorage.removeItem('token')
    navigate('/')
    window.location.reload()
  }
  return (
    <header>
      <nav className="flex items-center gap-2">
        {navigations.map(nav => {
          const isSignIn = nav.to === '/signin'
          if (isSignIn && token) return null
          return (
            <NavLink
              key={nav.to}
              to={nav.to}
              end
              className={({ isActive }) => {
                return isActive ? 'text-red-500' : 'text-black'
              }}>
              {nav.label}
            </NavLink>
          )
        })}
        {token && <Button onClick={signOut}>로그아웃</Button>}
      </nav>
    </header>
  )
}
