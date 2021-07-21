import React, { useState } from 'react'
import PokemonDetails from '../BattleCard/PokemonDetails'

const ShowMore = () => {
  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=9')

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemon(listArray => [...listArray, data])
      })
    }
    createPokemonObject(data.results)
  }

  return (
    <div className="pokemon-container">
      <h1 className="headertext">Pokédex</h1>
      <div className="all-container">
        {allPokemon.map((pokemon, index) =>
          <PokemonDetails
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_shiny}
            type={pokemon.types[0].type.name}
            hp={pokemon.stats[0].base_stat}
            attack={pokemon.stats[1].base_stat}
            defense={pokemon.stats[2].base_stat}
            spatk={pokemon.stats[3].base_stat}
            spdef={pokemon.stats[4].base_stat}
            speed={pokemon.stats[5].base_stat}
            key={index}
          />)}
        <button className="load-more" onClick={() => getAllPokemon()}>Load Pokémon</button>
      </div>
    </div>
  )
}
export default ShowMore;