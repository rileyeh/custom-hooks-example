import React from 'react'
import axiosHook from '../hooks/useAxios'
import PokeCard from './PokeCard'

const Pokemon = () => {
  const {
    data: pokemonList,
    err,
    loading,
  } = axiosHook('https://pokeapi.co/api/v2/pokemon/')

  if (loading) return <div>Loading...</div>
  if (err) return <div>Error: {err.message}</div>

  return (
    <div>
      <h1>Pokedex!</h1>
      <div className='card-container flex-horizon'>
        {pokemonList.results?.map((p, index) => (
          <PokeCard key={index} name={p.name} />
        ))}
      </div>
    </div>
  )
}

export default Pokemon
