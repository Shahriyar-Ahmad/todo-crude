import React from 'react'
import { useParams } from 'react-router'

function EditUser() {
    const {id} = useParams();
    return (
    <div>
      Edit user {id}
    </div>
  )
}

export default EditUser
