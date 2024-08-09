import React from 'react'
import InputField from './InputField'
import { useState } from 'react'

const Form = () => {

    let formField = [
    {
        type:'text',
        name:'userName',
    },
    {
        type:'email',
        name:'email',
    },
    {
        type:'radio',
        name:'gender',
        radio:['male','female','others']
    },
    {
        type:'checkbox',
        name:'hobby',
        checkbox:['cricket','chess','others']
    },
    {
        type:'password',
        name:'password',
    },
    {
        type:'password',
        name:'confirmPassword'
    }]

    let [formData,setFormData] = useState({
        userName:'',
        email:'',
        password:'',
        confirmPassword:'',
        gender:'male',
        hobby:[]

    })

    let [error,setError] = useState({});
    let [submitted,setSubmitted] = useState(false);

    let validate = {
        userName: [{required:true,message:'Please Enter UserName'},{length:3,message:'UserName Must be 3 char'}],
        email: [{required:true,message:'Please Enter Email'},{pattern:'^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$',message:'Enter Valid Email'}],
        password:[{required:true,message:'Please Enter Password'},{length:6,message:'Password Must be 6 char'}],
        confirmPassword:[{match:true,message:'Password can not be Match'}],
        gender:[{required:true,message:'Please Choose gender'}]
    }

    function handleChange(e){
        let {name,value,type,checked} = e.target;

        setError({});
        
        setFormData((prevState) => {
            if(type === 'checkbox' && !checked){
                return {
                    ...prevState,
                    [name]:prevState[name].filter((hobby) => hobby !== value)
                }
            }
            return {
                ...prevState,
                [name]: type === 'checkbox'?[...prevState[name],value]:value,
            }
        });
        console.log(formData,'formdata is here');
    }

    const validateData = (data) => {
        console.log(data);

        // let pattern = "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$";

        let error = {};

        for(let key in validate){
            validate[key].some((field) => {
                console.log(data[key],'confirm pass',key,'key is',data.password,'pass')
                if(field.required && !data[key]){
                    error[key] = field.message;
                    return true;
                }
                if(field.pattern && !data[key].match(field.pattern)){
                    error[key] = field.message;
                    return true;
                }
                if(data[key].length < field.length){
                    error[key] = field.message;
                    return true;
                }
                if(field.match && data[key] !== data.password){
                    error[key] = 'Password Do not Match';
                    return true;
                }


            })
        }

        console.log(error,'error is here');

        // formField.forEach((field) => {
        //     if(data[field.name].length < 3){
        //         error[field.name] = "Please Enter atleast 3 character";
        //     }
        // })

        // if(data.userName.length < 3){
        //     error.userName = 'User Name Must be at least 3 character';
        // }

        // if(!data.email.match(pattern)){
        //     error.email = 'Email is not Valid Formate'
        // }

        // if(data.password.length < 5){
        //     error.password = 'Password must be at least 5 character'
        // }

        // if(data.confirmPassword !== data.password){
        //     error.confirmPassword = 'Conform password did not match with password';
        // }

        console.log(error,'error is here');
        
        return error;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validateData(formData);
        setError(errors);
        if(Object.keys(errors).length === 0){
            setSubmitted(true);
            setFormData({
                userName:'',
                email:'',
                password:'',
                confirmPassword:'',
                gender:'male',
                hobby:[]
            })
        }

    }


  return (
    <form method='post' className='border flex justify-center items-center h-[100vh]'>

        <fieldset>

            <legend className='text-lg text-gray-900 text-center'>Users Form Field</legend>

            <div className='border-2 border-gray-800 rounded-md m-[10px] p-8 w-[400px]'>

                {
                    formField.map((field,index) => <InputField data={field} handleChange={handleChange} formData={formData} key={index} error={error}></InputField>)
                }

            </div>


            <button onClick={handleSubmit} className='text-lg mx-auto text-center ml-[43%] border-2 border-gray-900 p-1 rounded-md'>Submit</button>

        </fieldset>
        
        
    </form>
  )
}

export default Form