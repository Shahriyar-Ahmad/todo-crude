import React from 'react'
import UserList from './UserList'

function Todo() {
    return (
        <div>
            <b>Todo</b>
            <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-12'>
                <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD Todo App with Redux Toolkit.</h1>
                <UserList />
            </div>
        </div>
    )
}

export default Todo
