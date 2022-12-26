import React, { useState } from 'react'
import DataList from '../utils/Data.json'

export const PricingCard = () => {
  const [isChecked, setIsChecked] = useState(true)
  const [selectedRange, setSelectedRange] = useState(DataList[0])

  const handleChange = (value) => {
    setSelectedRange(DataList[value])
  }

  const handleChecked = (value) => {
    setIsChecked(value)
  }

  const calculateYearlyPrice = (pricemonthly) => {
    const totalYearlyPrice = pricemonthly * 12
    const price = totalYearlyPrice - totalYearlyPrice * 0.25
    return price
  }

  return (
    <section className='pricing-card'>
      <div className='pricing-title'>
        <div className='page-view'>{selectedRange.pageviews} previews</div>
        <div className='price'>
          {
            <span>
              {isChecked
                ? `$${calculateYearlyPrice(
                    selectedRange.pricemonthly
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : `$${selectedRange.pricemonthly.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
            </span>
          }
          <span className='month'>/{isChecked ? 'yearly' : 'monthly'}</span>{' '}
        </div>
      </div>
      <div className='progress-field'>
        <div className='progress-field__input'>
          <input
            type='range'
            className='myrange'
            max={4}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className='monthly'>
          <span>monthly billing</span>
          <label className='switch'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={(e) => handleChecked(e.target.checked)}
            />
            <span className='slider'></span>
          </label>
          <span>Yearly billing</span>
          <span className='discount'>25% discount</span>
        </div>
        <hr />
        <div className='start-period'>
          <ul>
            <li>unlimited websites</li>
            <li>100% data ownership</li>
            <li>email reports</li>
          </ul>
          <button action='Start my trial'>start my trial</button>
        </div>
      </div>
    </section>
  )
}
