import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import UserAuthProvider from './context/UserAuthcontext';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Provider } from 'react-redux';
import { store } from './store';

const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools/>
      </QueryClientProvider>
    </Provider>
   
  </React.StrictMode>,
)
