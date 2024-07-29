import React, { useState } from 'react'
import useAxios from '../hooks/useAxios'

const PokeCard = ({ name }) => {
  const [hide, setHide] = useState(true)

  const {
    data: pokemon,
    err,
    loading,
  } = useAxios(`https://pokeapi.co/api/v2/pokemon/${name}/`)

  if (loading) return <div>Loading...</div>
  if (err) return <div>Error: {err.message}</div>

  const handleClick = () => {
    setHide((prevHide) => !prevHide)
  }

  return (
    <div className='char-card flex-horizon'>
      <img src={pokemon.sprites.front_default} onClick={handleClick} />
      {!hide && <h3>{name}</h3>}
    </div>
  )
}

export default PokeCard
