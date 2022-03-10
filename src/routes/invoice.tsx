import { useParams } from 'react-router-dom'
import { getInvoice } from '../data'

export default function Invoice() {
  let params = useParams()
  let invoice
  if (params.invocieId) {
    invoice = getInvoice(parseInt(params.invocieId, 10))
    console.log(invoice)
  }
  return <h2>Invoice: {params.invocieId}</h2>
}
