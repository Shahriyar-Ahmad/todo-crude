import React, { useState } from 'react'

// Components
import TextField from './TextField'
import Button from './Button'

// React Router
import { useNavigate, useParams } from 'react-router'

// React redux
import { useSelector, useDispatch } from 'react-redux';
import { editTask } from '../features/todoslice/todoSlice';

function EditUser() {
  const todo = useSelector((state)=> state.todo);
  const dispatch = useDispatch()
  const param = useParams()
  const ExitingTask = todo.filter((todo) => todo.id === param.id);
  const {task, detail} = ExitingTask[0]
  const [values,setValues] = useState({
    task ,
    detail
})
const navigate = useNavigate();
const handleEditTask = () =>{
    dispatch(editTask({
    id: param.id,
    task: values.task,
    detail: values.detail,
    }))
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
    value={values.detail}
    onChange={(e) => setValues({...values, detail: e.target.value})}
    label='Task Detials'
    inputProps={{type: 'email', placeholder: 'Impliment add to cart feature.'}}
  />
  <Button onClick={handleEditTask}>Update</Button>
</div>
)
}

export default EditUser;
