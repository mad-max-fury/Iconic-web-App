import React from 'react'

const ProductDetailsPage = () => {
  const images = ["a", "b", "a", "b"]
  return (
    <div className='w-4/5 mx-auto h-screen border border-solid border-primary'>
      <aside className='img_Wrapper'>
        <div>
          {images.map(img => {
            return <img src="" alt={img}></img>
          })}
        </div>
        <div className='img-display'>
          <img src='' alt='display'></img>
        </div>
      </aside>
      <aside>

      </aside>
      <section></section>

    </div>
  )
}

export default ProductDetailsPage


