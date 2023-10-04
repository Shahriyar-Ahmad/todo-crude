import React, { useState } from 'react'

// Components
import TextField from './TextField'
import Button from './Button'

// React Router
import { useNavigate } from 'react-router'

function EditUser() {
  const [values,setValues] = useState({
    task: '',
    detial: ''
})
const navigate = useNavigate();
const handleEditTask = () =>{
    setValues({task: '', detial: ''});
    navigate('/');
    console.log(values)
}
return (
<div className='mt-10 max-w-xl mx-auto'>
  <TextField
    value={values.task}
    onChange={(e) => setValues({...values, task: e.target.value})}
    label='Task'
    inputProps={{type: 'text', placeholder: 'Work on Project'}}
  />
  <br />
  <TextField
    value={values.detial}
    onChange={(e) => setValues({...values, detial: e.target.value})}
    label='Task Detials'
    inputProps={{type: 'email', placeholder: 'Impliment add to cart feature.'}}
  />
  <Button onClick={handleEditTask}>Update</Button>
</div>
)
}

export default EditUser;
