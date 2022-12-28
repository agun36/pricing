import React, { useState } from 'react'
import DataList from '../utils/Data.json'

export const PricingCard = () => {
  const [isChecked, setIsChecked] = useState(true)
  const [selectedRange, setSelectedRange] = useState(DataList[0])
  const [rangeValue, setRangeValue] = useState(0)

  const handleChange = (value) => {
    setRangeValue(value)
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
        <div className='page-view'>{selectedRange.pageviews} Pageviews</div>
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
          <span className='month'>/{isChecked ? 'year' : 'month'}</span>{' '}
        </div>
      </div>
      <div className='progress-field'>
        <div className='progress-field__input'>
          <input
            type='range'
            className='myrange'
            max={4}
            onChange={(e) => handleChange(e.target.value)}
            style={{ backgroundSize: `${(rangeValue / 4) * 100}%` }}
          />
        </div>

        <div className='monthly'>
          <span>Monthly billing</span>

          <div className='onoffswitch'>
            <input
              type='checkbox'
              className='onoffswitch-checkbox'
              id='myonoffswitch'
              checked={isChecked}
              tabIndex={0}
              onChange={(e) => handleChecked(e.target.checked)}
            />
            <label className='onoffswitch-label' htmlFor='myonoffswitch'>
              <span className='onoffswitch-inner'></span>
              <span className='onoffswitch-switch'></span>
            </label>
          </div>
          <span>Yearly billing</span>
          <span className='discount'>25% discount</span>
        </div>
        <hr />
        <div className='start-period'>
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
          <button action='Start my trial'>Start my trial</button>
        </div>
      </div>
    </section>
  )
}
