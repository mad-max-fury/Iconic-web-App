import React from 'react'

const Search = () => {
  return (
    <>


      <div id="inputHolder" className="container w-5/5 h-16 my-auto flex flex-row content-center justify-between md:w-2/5">

        <input type="search" list="countryCarrd"
          placeholder="search  an item..." className=" shadow-xl border-solid border-l-2 border-t-2 border-r-2 pl-4  border-b-0 rounded border-primary w-12/12  h-14" name="" id="inputField" />
      </div>
    </>
  )
}

export default Search
