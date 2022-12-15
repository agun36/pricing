import './App.css'
import { useState } from 'react'
function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [price, setPrice] = useState(0)

  return (
    <main className='container '>
      <header className='header'>
        <div className='header-sub'>
          <h1 className='title'>Simple,traffic-based pricing</h1>

          <p className='text'>
            Sign Up our 30 days trial, No credit card is required
          </p>
        </div>
      </header>
      <aside>
        <div className='aside-title'>
          <div className='page-view'>
            <span>100k</span>pageviews
          </div>
          <div className='price'>
            <span>
              <span className='price-fixed'></span>{' '}
              {isChecked ? `$${price * 0.75}.00 ` : `$${price}.00`}
            </span>
            <span className='month'>/month</span>
          </div>
        </div>
        <div className='progress-field'>
          <div className='progress-field__input'>
            <input
              type='range'
              name=''
              className='myrange'
              value={price}
              onInput={(evt) => setPrice(Number(evt.target.value))}
            />
          </div>
          <div className='monthly'>
            <span>monthly billing</span>
            <label className='switch'>
              <input
                type='checkbox'
                checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
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
      </aside>
    </main>
  )
}

export default App
