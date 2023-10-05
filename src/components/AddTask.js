import React, { useState } from 'react'

// Components
import TextField from './TextField'
import Button from './Button'

// React Router
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todoslice/todoSlice';

// uuid
import { v4 as uuidv4 } from 'uuid';

function AddTask() {
   const dispatch = useDispatch();
    const [values,setValues] = useState({
        task: '',
        detail: ''
    })
    const navigate = useNavigate();
    const handleAddTask = () =>{
        setValues({task: '', detail: ''});
        dispatch(addTask({
          id: uuidv4(),
          task: values.task,
          detail : values.detail
        }));
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
        value={values.detail}
        onChange={(e) => setValues({...values, detail: e.target.value})}
        label='Task Detials'
        inputProps={{type: 'email', placeholder: 'Impliment add to cart feature.'}}
      />
      <Button onClick={handleAddTask}>Submit</Button>
    </div>
  )
}

export default AddTask
