import { useEffect, useState } from "react"
import { getPokemonData, getPokemons, searchPokemon } from "../../services/api"
import { Navbar } from "../../Components/Navbar"
import { PokeCard } from "../../Components/PokeCard"
import { Searchbar } from "../../Components/Searchbar"

interface PokedexProps {
    name: string
    url: string
}

export const Pokedex = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [pokedex, setPokedex] = useState<PokedexProps[]>([])
    const [pokemon, setPokemon] = useState("")

    const onSearchPokemon = (pokemon: string) => {
        setPokemon(pokemon)
    }

    const fetchPokemons = async () => {
        try {
            setIsLoading(true)
            const data = await getPokemons()
            const promises = data.results.map(async (pokemon: PokedexProps) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises);
            setPokedex(results)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Searchbar onSearch={onSearchPokemon} />
                {!isLoading ?
                    pokemon != "" ?
                        (
                            <PokeCard pokemon={pokemon} />
                        ) : (
                            pokedex.map((item) => <PokeCard key={item.name} pokemonData={item} />)

                        ) : (
                        <p>Loading please wait...</p>
                    )
                }
            </div>
        </>
    )
}