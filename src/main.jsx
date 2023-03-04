import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAuthProvider from './context/UserAuthcontext';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthProvider>
      <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools/>
      </QueryClientProvider>
    </UserAuthProvider>
  </React.StrictMode>,
)
