import React from 'react'

export default function Review() {
  return (
    <div>    {people.map((person) =>(
      <div key={person.id}>
      <h3>{person.name}</h3>
      <p className='job'>{person.job}</p>
      <div className='img-container'>
      <img className='person-img'  src={person.image} alt={person.name} />
      </div>
      <p className='info'>{person.text}</p>
      </div>
    ))}</div>
  )
}
