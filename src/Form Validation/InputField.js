import React from 'react'
import RadioField from './RadioField';
import Checkboxes from './Checkboxes';

const InputField = ({data,handleChange,formData,error}) => {
    // console.log(data,handleChange)
    // let type = data['type'];
    // console.log(type,'type is here')
    // let name = data['name'];
    // console.log(name,'name is here')

    // let {type,name} = props.data;
    // let handleChange = props.handleChange;
    // console.log(props.data)
    // console.log(type,'   ',name)

    console.log(formData,'formdata is here');
    console.log(error)

    if(data.type === 'radio'){
      return (
        <div>
          <RadioField radio={data.radio} name={data.name} handleChange={handleChange} error={error} gender={formData.gender}/>
        </div>
      )
    }

    if(data.type === 'checkbox'){
      return (
        <div>
          <Checkboxes checkboxes={data.checkbox} name={data.name} handleChange={handleChange} error={error} hobby={formData.hobby}></Checkboxes>
        </div>
      )
    }



  return (
    <div className='border p-3'>
      
        <div className='flex flex-col gap-1'>
          <label>{data.name.toUpperCase()}</label>
          <input className='border-2 border-gray-800 rounded-md p-1'
          type={data.type || 'text'}
          name={data.name || 'name'}
          value={formData[data.name]}
          onChange={handleChange}
          
          ></input>
        </div>
        {
          error[data.name] ?
            <span className=' text-red-500'>{error[data.name]}</span> :
            null
        }
    </div>
  )
}

export default InputField