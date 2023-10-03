import React from 'react';

// Components
import Todo from './components/Todo';
import AddTask from './components/AddTask';
import EditUser from './components/EditUser';

// React Router
import { Route, Routes } from 'react-router';


function App() {
  return (
    <div className="App">
      <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-12'>
        <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD Todo App with Redux Toolkit.</h1>
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/add-task' element={<AddTask />} />
          <Route path='/edit-task/:id' element={<EditUser/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
