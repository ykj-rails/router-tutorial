import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Expenses } from '../components/Expenses'
import { Invoice } from '../components/Invoice'
import { Invoices } from '../components/Invoices'
import { InvoicesTop } from '../components/InvoicesTop'
import { NotFound } from '../components/NotFound'
import { Top } from '../components/Top'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<InvoicesTop />} />
            <Route path=":invocieId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
