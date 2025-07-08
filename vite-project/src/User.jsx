import React from 'react'

function User({name,age,address,email,phone}) {
  return (
    <>
    <h1>{name}</h1>
    <h2>{age}</h2>
    <h2>{address.city}</h2>
    <h3>{email}</h3>
    <h4>{phone}</h4>
    </>
  )
}

export default User