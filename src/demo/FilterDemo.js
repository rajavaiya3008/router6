import React from 'react'

const FilterDemo = () => {

 let data = [{name:1},{name:2},{name:3}]


  return (
    <div>
        {
            data.map(item => {
                return (item.name > 1 && <div>{item.name}</div>)
            })
        }
    </div>
  )
}

export default FilterDemo;