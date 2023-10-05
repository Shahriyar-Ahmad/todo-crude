import React from 'react'

// Icons
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import Button from './Button';

// React Router
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteTask } from '../features/todoslice/todoSlice';

function UserList() {
   const todo = useSelector((state)=> state.todo);
   const dispatch = useDispatch()
   const deleteTodo = (id) => {
     dispatch(deleteTask({
      id: id,
     }))
     console.log(todo)
   }

  const renderCard = () => todo.map(todo => (
    <div key={todo.id} className='bg-gray-300 p-5 flex items-center justify-between my-5 rounded-lg'>
      <div>
        <h3 className='font-bold text-lg text-gray-700'>{todo.task}</h3>
        <p className='font-normal text-gray-600'>{todo.detail}</p>
      </div>
      <div className='flex mx-2 gap-2 font-bold text-gray-700 text-lg'>
        <Link to={`edit-task/${todo.id}`}>
        <AiOutlineEdit />
        </Link>
        <MdDeleteOutline className='cursor-pointer' onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  ))
  return (
    <div>
      <Button><Link to='/add-task'>Add Task</Link></Button>
      <div className='grid  gap-5 md:grid-cols-2'>
        {
          todo.length ? renderCard() : <p className=' text-center text-gray-700 col-span-2 font-semibold'>Still Not Task here...</p>
        }
      </div>
    </div>

  )
}

export default UserList
