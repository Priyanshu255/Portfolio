import React from 'react'
import { ErrorMessage, useField } from 'formik';

const TextField = ({...props}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input
        className= {`my-2 w-full p-2 text-black bg-[#E0E0E0] dark:bg-[#ccd6f6] shadow-lg shadow-[#040c166b] border-4 ${meta.touched && meta.error && 'border-red-700'}`}
        {...field} {...props}
        autoComplete='off'
      />
      <ErrorMessage component="div" name={field.name} className = "text-sm text-red-600"/>
    </div>
  )
}

export default TextField
