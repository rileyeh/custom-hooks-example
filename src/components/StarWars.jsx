import React from 'react'
import useAxios from '../hooks/useAxios'

const StarWars = () => {
  const {
    data: characters,
    err,
    loading,
  } = useAxios('https://swapi.dev/api/people')

  if (loading) return <div>Loading...</div>
  if (err) return <div>Error: {err.message}</div>

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div className='card-container flex-horizon'>
        {characters.results?.map((char, index) => (
          <div key={index} className='char-card flex-horizon'>
            <h3>Name: {char.name}</h3>
            <p>Born: {char.birth_year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StarWars
