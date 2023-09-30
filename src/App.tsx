import { QueryClientProvider } from '@tanstack/react-query'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from './api/queryClient'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
