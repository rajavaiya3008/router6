import React from 'react'

const PageChange = ({currentPage,dataLength,handleNextPageChange,handlePrevPageChange,currentPageData}) => {
  console.log('currentPageData', currentPageData)
  return (
    <div>
      <p>Page Change</p>
      
      

      <button onClick={handlePrevPageChange}>-</button>
      <p>{currentPage}</p>
      <button onClick={handleNextPageChange}>+</button>
    </div>
  )
}

export default PageChange