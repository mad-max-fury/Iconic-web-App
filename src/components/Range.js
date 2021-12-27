import { useState } from 'react'
import "../styles/Range.css"
const Range = ({ setMinPrice, setMaxPrice }) => {
  const [minprice, setMinprice] = useState(null)
  const [maxprice, setMaxprice] = useState(null)
  const handleminprice = ({ target }) => {
    setMinprice(target.value)
    setMinPrice(target.value)
  }
  const handlemaxprice = ({ target }) => {
    setMaxprice(target.value)
    setMaxPrice(target.value)
  }
  return (
    <>
      <div className="categories">
        <h3>PRICE RANGES</h3>
        <div className='flex justify-between'>
          <div className='flex w-1/2 gap-1'>
            <label>&#8358;</label>
            <input placeholder='min' type='number' onChange={handleminprice} value={minprice} className=' w-3/4 border-b border-solid border-primary border-t-0 border-l-0 border-r-0' />
          </div>
          <div className='flex gap-1 w-1/2'>
            <label>&#8358;</label>
            <input placeholder='max' type='number' onChange={handlemaxprice} value={maxprice} className=' w-3/4 border-b border-solid border-primary border-t-0 border-l-0 border-r-0' />
          </div>
        </div>

      </div>

    </>
  )
}

export default Range
