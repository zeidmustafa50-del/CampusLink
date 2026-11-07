import { createContext, useContext, useEffect, useState } from 'react'
import { student } from '../data/student.js'

const AuthContext = createContext(null)

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}
const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable: ignore */
  }
}

/**
 * Mock authentication: there is no backend, so "logging in" just stores a demo
 * student profile in localStorage. Enrolled courses are persisted the same way.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read('cl_user', null))
  const [enrolled, setEnrolled] = useState(() => read('cl_enrolled', student.defaultEnrolled))

  useEffect(() => write('cl_user', user), [user])
  useEffect(() => write('cl_enrolled', enrolled), [enrolled])

  const login = (email) => setUser({ ...student.profile, email })
  const logout = () => setUser(null)
  const toggleEnroll = (id) =>
    setEnrolled((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]))

  return (
    <AuthContext.Provider value={{ user, login, logout, enrolled, toggleEnroll }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
