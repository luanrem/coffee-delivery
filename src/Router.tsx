import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './Layout/Header'
import Checkout from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
