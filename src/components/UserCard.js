import React from 'react'

function UserCard({ user }) {
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
    </div>
  )
}

export default UserCard