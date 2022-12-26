import React, { useState } from 'react'

export const PricingCard = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [page_Views, setPage_Views] = useState([
    '10k',
    '50k',
    '100k',
    '500k',
    '1m',
  ])
  console.log(page_Views * 0.25)
  const [price, setPrice] = useState([8, 12, 16, 24, 36])
  console.log(price.length)
  const handleChange = () => {}

  const handleChecked = () => {
    setIsChecked(!isChecked)
  }

  return (
    <section>
      <div className='aside-title'>
        <div className='page-view'>
          <ul style={{ listStyle: 'none' }}>
            <li>previews</li>
          </ul>
        </div>
        <div className='price'>
          {
            <span>
              {isChecked
                ? `$${(price * 0.25).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : `$${(price * 0.25).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
            </span>
          }

          <div>
            <span className='month'>/{isChecked ? 'yearly' : 'monthly'}</span>{' '}
          </div>
        </div>
      </div>
      <div className='progress-field'>
        <div className='progress-field__input'>
          <input type='range' className='myrange' onChange={handleChange} />
        </div>
        <div className='monthly'>
          <span>monthly billing</span>
          <label className='switch'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleChecked}
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
