import React from 'react'
import "../styles/paginationBtn.css"
const PaginationBtn = ({ setPrevPage, setNextPage }) => {
  return (
    <>
      <div className="paginationIndexWrapper">
        <ul className="paginationIndex">
          <li onClick={() => setPrevPage()}>Prev</li>
          <li onClick={() => setNextPage()}>Next</li>
        </ul>

      </div>
    </>
  )
}

export default PaginationBtn
