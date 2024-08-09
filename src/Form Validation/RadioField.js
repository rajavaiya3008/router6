import React, { Fragment } from 'react'

const RadioField = ({radio,name,handleChange,error,gender}) => {
    console.log(radio,'radio is here');
    console.log(error,'error in radio')
    console.log(gender,'gender on radio field')
  return (
    <div className='border p-3 gap-1'>
        <p>{name.toUpperCase()}</p>

        <div className='flex gap-1'>

            {
                radio.map((field,i) => {
                    return (
                        <Fragment key={i}>
                            
                            <input 
                            type='radio'
                            name={name}
                            value={field}
                            checked={gender === field}
                            onChange={handleChange}
                            />
                            <label htmlFor="">{field}</label>
                            
                        </Fragment>
                    
                    )
                    
                })
            }

        </div>
        {
            error.gender && <p className=' text-red-500'>{error.gender}</p>
        }
    </div>
  )
}

export default RadioField