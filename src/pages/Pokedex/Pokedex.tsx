import { useEffect, useState } from "react"
import { getPokemons, searchPokemon } from "../../services/api"
import { Navbar } from "../../Components/Navbar"
import { PokeCard } from "../../Components/PokeCard"
import { PokedexCards } from "../../Components/PokedexCards"
import { Searchbar } from "../../Components/Searchbar"

export const Pokedex = () => {
    const [loading, setLoading] = useState(false)
    const [pokedex, setPokedex] = useState([])
    const [pokemon, setPokemon] = useState()

    const onSearchPokemon = async (pokemon: string) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    const fetchPokemons = async () => {
        try {
            setLoading(true)
            const result = await getPokemons()
            setPokedex(result.results)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, [])
    console.log(pokemon)
    return (
        <>
            <Navbar />
            <Searchbar onSearch={onSearchPokemon} />
            {/* {pokemon && <PokeCard pokemonData={pokemon} />} */}
            <PokedexCards pokedex={pokedex} loading={loading} />
        </>
    )
}