import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Expenses from './routes/expenses'
import Invoice from './routes/invoice'
import Invoices from './routes/invoices'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invocieId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
