import React from 'react'
import { HeaderComp } from '../components/headerComp'
import { PricingCard } from '../components/pricingCard'

export const PricingPage = () => {
  return (
    <main className='container'>
      <HeaderComp />
      <div style={{ margin: 'auto' }}>
        <PricingCard />
      </div>
    </main>
  )
}
