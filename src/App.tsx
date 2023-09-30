import { QueryClientProvider } from '@tanstack/react-query'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from './api/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
