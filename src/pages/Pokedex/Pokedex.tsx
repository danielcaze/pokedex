import { useEffect, useState } from "react"
import { getPokemonData, getPokemons, searchPokemon } from "../../services/api"
import { Navbar } from "../../components/Navbar"
import { PokeCard } from "../../components/PokeCard"
import { Searchbar } from "../../components/Searchbar"
import { Pagination } from "../../components/Pagination"


interface PokedexProps {
    name: string
    url: string
}

export const Pokedex = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [pokedex, setPokedex] = useState<PokedexProps[]>([])
    const [pokemon, setPokemon] = useState("")
    const [offset, setOffset] = useState(0)

    const onSearchPokemon = (pokemon: string) => {
        setPokemon(pokemon)
    }

    const fetchPokemons = async () => {
        try {
            setIsLoading(true)
            const data = await getPokemons(51, offset)
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
    }, [offset])

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Searchbar onSearch={onSearchPokemon} />
                <Pagination setOffset={setOffset} />
                <div className="grid grid-cols-3">
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
            </div>
        </>
    )
}