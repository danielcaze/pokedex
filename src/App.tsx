import { useEffect, useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Searchbar } from './Components/Searchbar'
import { getPokemon, searchPokemon } from './api'
import './global.css'
import { Pokedex } from './Components/Pokedex'

interface PokemonProps {
  name: string
  id: number
  sprites?: Object
}

export const App = () => {
  const [pokemon, setPokemon] = useState()
  const [pokedex, setPokedex] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemon()
      setPokedex(result)
      console.log(pokedex)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  const onSearchPokemon = async (pokemon: string) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }
  return (
    <>
      <Navbar />
      <Searchbar onSearch={onSearchPokemon} />
      <Pokedex pokemon={pokemon} pokedex={pokedex} loading={loading} />
    </>
  )
}