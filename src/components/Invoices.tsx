import { NavLink, Outlet, useSearchParams } from 'react-router-dom'
import { getInvoices } from '../data'

export const Invoices = () => {
  const invoices = getInvoices()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            let filter = e.target.value
            filter ? setSearchParams({ filter }) : setSearchParams({})
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter')
            console.log(searchParams)
            if (!filter) return true
            let name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                }
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}
