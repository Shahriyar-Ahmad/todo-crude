import React from 'react'

function UserList() {
    const todos = [
        {id:'1', task: 'Code', detail: 'code crude app'},
        {id:'2', task: 'Code 2', detail: 'code cat app'}
    ];   
    const  renderCard = () => todos.map(todo=>(
        <div key={todo.id} className='bg-gray-300 p-5 flex items-center justify-between'>
            <div>
            <h3 className='font-bold text-lg text-gray-700'>{todo.task}</h3>
          <p className='font-normal text-gray-600'>{todo.detail}</p>
            </div>
          
        </div>
    ))
  return (
    <div className='grid  gap-5 md:grid-cols-2'>
   {
    todos.length ? renderCard(): <p className=' text-center text-gray-700 col-span-2 font-semibold'>No User</p>
   }
    </div>
  )
}

export default UserList
