import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Header from './Layout/Header'

export function Router() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
