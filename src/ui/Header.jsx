import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

export default function Header() {
  return (
    <header>
        <Link to="/">Heed Pizza</Link>

        <SearchOrder />

        <p>Rasheed</p>
    </header>
  )
}
