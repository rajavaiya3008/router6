import React, { Fragment } from 'react'

const Checkboxes = ({checkboxes,name,error,handleChange,hobby}) => {
    console.log(checkboxes,'checkboxes is here')
    console.log(name,'name of check box')
  return (
    <div className='border p-3'>
        <p>{name.toUpperCase()}</p>

        <div className='flex gap-1'>

            {
                checkboxes.map((checkbox,i) => {
                    return (
                        <Fragment key={i}>
                            <input 
                            type="checkbox"
                            name={name}
                            value={checkbox}
                            checked={hobby.includes(checkbox)}
                            onChange={handleChange}
                            />
                            <label htmlFor="">{checkbox}</label>
                        </Fragment>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Checkboxes